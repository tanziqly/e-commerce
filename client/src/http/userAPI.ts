import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (email: string, password: string) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    role: "ADMIN",
  });
  const token = String(data);
  localStorage.setItem("token", token);
  return jwtDecode(token);
};

export const login = async (email: string, password: string) => {
  const { data } = await $host.post("api/user/login", {
    email,
    password,
  });
  const token = String(data);
  localStorage.setItem("token", token);
  return jwtDecode(token);
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  const token = String(data);
  localStorage.setItem("token", token);
  return jwtDecode(token);
};
