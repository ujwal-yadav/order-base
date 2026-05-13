import type { User } from "@supabase/supabase-js";

export type Profile = {
  id: string;
  business_name: string;
  instagram_handle: string;
  created_at: string;
  updated_at: string;
};

export type AuthContext = {
  user: User | null;
  profile: Profile | null;
};
