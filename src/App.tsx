import { useSupabaseClient } from "./context/SupabaseClientProvider";
import Container from "@mui/material/Container";

export default function App() {
  const { isClientConnected } = useSupabaseClient();

  console.log(isClientConnected);
  return <Container>hi</Container>;
}
