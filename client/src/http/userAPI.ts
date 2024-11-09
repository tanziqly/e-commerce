import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (email: string, password: string) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    role: "ADMIN",
  });
  localStorage.setItem("token", data.token);
  const token = String(data);
  return jwtDecode(token);
};

export const login = async (email: string, password: string) => {
  const { data } = await $host.post("api/user/login", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  const token = String(data);
  return jwtDecode(token);
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  const token = String(data);
  return jwtDecode(token);
};
