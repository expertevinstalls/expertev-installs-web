/* ============================================================
   STATE — Mutable runtime state variables
   Declare here so all modules share the same globals.
============================================================ */

let _rrIndex    = {};   // round-robin assignment index per county
let currentUser = null; // logged-in user object ({ email, role, name, id? })
let notifOpen   = false;// notification panel open flag
let _myLeadsView = 'cards'; // 'cards' | 'table' — contractor leads view
let _dashInited  = false;   // lazy-init flag for dashboard overlay
let _lastNewLeadCount = -1; // tracks known new-lead count for polling
let _pollInterval = null;   // lead-polling interval handle
let dbContractors = [];    // contractors loaded from Supabase (replaces CONTRACTORS array)
let currentContractor = null; // logged-in contractor's DB record (null for admin or unauthenticated)
let _awaitingPasswordSetup = false; // true when an invite/recovery link is being processed
let _authListenerRegistered = false; // prevents registering the auth listener more than once
let _realtimeSubs = [];             // active Supabase Realtime unsubscribe functions
let _dashPeriod          = 'this-month';  // current period for admin dashboard: 'this-month' | 'last-month' | '90-days' | 'all'
let _revPeriod           = 'this-month';  // current period for revenue page: same options
let _inactiveLoginAttempt = false;        // set by _resolveAuthUser when is_active = false
