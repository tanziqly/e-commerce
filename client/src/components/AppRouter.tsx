import { Routes, Route } from "react-router-dom";
import { AuthRoutes, PublicRoutes } from "../routes";
import { useContext } from "react";
import { Context } from "@/main";

export const AppRouter = () => {
  const { user } = useContext(Context);

  return (
    <Routes>
      {user.isAuth &&
        AuthRoutes.map(({ path, Element }) => (
          <Route path={path} element={<Element />} key={path} />
        ))}
      {PublicRoutes.map(({ path, Element }) => (
        <Route path={path} element={<Element />} key={path} />
      ))}
    </Routes>
  );
};
