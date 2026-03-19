// api/reviews.js — Vercel serverless function
// Fetches Google Place reviews and returns them to the frontend.
// The API key never touches client-side JavaScript.
//
// ── Setup (one-time, takes ~5 minutes) ──────────────────────────────────────
// 1. Go to https://console.cloud.google.com → APIs & Services → Enable:
//      "Places API" (legacy)
// 2. Create an API key, restrict it to "Places API" and your domain.
// 3. Find your Place ID:
//      Visit https://developers.google.com/maps/documentation/places/web-service/place-id
//      Search for "Expert EV Installers" — copy the ChIJ... Place ID.
// 4. In Vercel dashboard → your project → Settings → Environment Variables, add:
//      GOOGLE_PLACES_KEY   = your API key
//      GOOGLE_PLACE_ID     = your ChIJ... Place ID
// 5. Redeploy once — after that, reviews update automatically every hour.
// ────────────────────────────────────────────────────────────────────────────

const CACHE_SECONDS = 3600; // Cache responses for 1 hour

export default async function handler(req, res) {
  const key     = process.env.GOOGLE_PLACES_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // CORS — allow same-origin requests from the site
  res.setHeader('Access-Control-Allow-Origin', 'https://expertevinstalls.com');
  res.setHeader('Cache-Control', `s-maxage=${CACHE_SECONDS}, stale-while-revalidate`);

  // Not yet configured — return empty state gracefully, no errors thrown
  if (!key || !placeId) {
    return res.status(200).json({ reviews: [], configured: false });
  }

  try {
    const apiUrl =
      `https://maps.googleapis.com/maps/api/place/details/json` +
      `?place_id=${encodeURIComponent(placeId)}` +
      `&fields=reviews,rating,user_ratings_total` +
      `&reviews_sort=newest` +
      `&key=${key}`;

    const upstream = await fetch(apiUrl);
    const data     = await upstream.json();

    if (data.status !== 'OK') {
      console.error('[reviews] Places API error:', data.status, data.error_message || '');
      return res.status(200).json({ reviews: [], configured: true, error: data.status });
    }

    const reviews = (data.result.reviews || []).map(r => ({
      author:  r.author_name,
      rating:  r.rating,
      text:    r.text,
      relTime: r.relative_time_description,
      time:    r.time,  // Unix timestamp, not displayed but available
    }));

    return res.status(200).json({
      reviews,
      configured:   true,
      overallRating: data.result.rating             || null,
      totalReviews:  data.result.user_ratings_total || 0,
    });
  } catch (err) {
    console.error('[reviews] Fetch failed:', err.message);
    return res.status(200).json({ reviews: [], configured: true, error: 'fetch_failed' });
  }
}
