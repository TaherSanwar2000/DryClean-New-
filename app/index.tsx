import { ThemeProvider } from "@shopify/restyle";
import theme from "../utils/theme";
import Login from "../src/public/Login";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <Login />
    </ThemeProvider>
  );
}
