import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { createContext } from "react";
import UserStore from "./store/UserStore.ts";
import DeviceStore from "./store/DeviceStore.ts";

const userStore = new UserStore();
const deviceStore = new DeviceStore();

export const Context = createContext<{ user: UserStore; device: DeviceStore }>({
  user: userStore,
  device: deviceStore,
});

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <Context.Provider
      value={{
        user: userStore,
        device: deviceStore,
      }}
    >
      <App />
    </Context.Provider>
  </StrictMode>
);
