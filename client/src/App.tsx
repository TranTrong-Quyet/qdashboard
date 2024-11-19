import { ReactNode } from "react";

import { ThemeProvider } from "./components/theme-provider.tsx";
import { Button } from "./components/ui/button.tsx";
import { ModeToggle } from "./components/mode-toggle.tsx";

//

function App({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div>
        <ModeToggle />
      </div>
      <h1>haha</h1>
      <Button variant="outline">Click</Button>
      {children}
    </ThemeProvider>
  );
}

export default App;
