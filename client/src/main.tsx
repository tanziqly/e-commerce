import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { createContext } from "react";
import UserStore from "./store/UserStore.ts";
import DeviceStore from "./store/DeviceStore.ts";

console.log(import.meta.env.VITE_API_URL);

export const Context = createContext<{ user: UserStore; device: DeviceStore }>({
  user: new UserStore(),
  device: new DeviceStore(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Context.Provider
      value={{
        user: new UserStore(),
        device: new DeviceStore(),
      }}
    >
      <App />
    </Context.Provider>
  </StrictMode>
);
