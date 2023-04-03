import { createContext, useContext, useEffect, useState } from "react";
import {
  SupabaseClientInitialValue,
  SupabaseClientProviderProps,
} from "../@types/supabase";
import { supabaseClient } from "../libs/initSupabase";

const initialValues: SupabaseClientInitialValue = {
  client: undefined,
  isClientConnected: false,
};

const SupabaseClientContext = createContext(initialValues);

export default function SupabaseClientProvider({
  children,
}: SupabaseClientProviderProps) {
  const [client, setClient] = useState(initialValues.client);
  const [isClientConnected, setIsClientConnected] = useState(
    initialValues.isClientConnected
  );

  useEffect(() => {
    if (supabaseClient) {
      setClient(supabaseClient);
      setIsClientConnected(true);
    } else {
      setClient(undefined);
      setIsClientConnected(false);
    }
  }, []);
  return (
    <SupabaseClientContext.Provider value={{ client, isClientConnected }}>
      {children}
    </SupabaseClientContext.Provider>
  );
}

export const useSupabaseClient = () => useContext(SupabaseClientContext);
