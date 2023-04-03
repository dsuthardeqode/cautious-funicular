import { SupabaseClient } from "@supabase/supabase-js";
import { ReactNode } from "react";

export interface SupabaseClientInitialValue {
  client: SupabaseClient | undefined;
  isClientConnected: boolean;
}

export interface SupabaseClientProviderProps {
  children: ReactNode;
}
