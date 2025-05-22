// src/lib/supabase.js

// This lightweight stub mirrors the Supabase client interface used in the app.
// The real @supabase/supabase-js package is not installed in this offline demo.
export const supabase = {
  auth: {
    signInWithOAuth: async ({ provider }) => {
      console.log(`Mock sign in with ${provider}`);
      return { error: null };
    },
  },
};
