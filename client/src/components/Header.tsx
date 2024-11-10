import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  ADMIN_ROUTE,
  REGISTRATION_ROUTE,
} from "@/lib/constants";

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "@/main";

import { observer } from "mobx-react-lite";

import { Button, buttonVariants } from "./ui/button";

export const Header = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logout = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="flex py-2 px-5 max-w-[1480px] w-full justify-center">
      <div className="flex justify-between items-center w-full">
        <Link className="text-lg font-bold" to={HOME_ROUTE}>
          Tanziqly's Shop
        </Link>
        <div className="flex gap-2">
          {user.isAuth ? (
            <>
              <Button variant="outline" onClick={() => navigate(ADMIN_ROUTE)}>
                I'm Admin
              </Button>
              <Button variant="destructive" onClick={logout}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Link
                className={buttonVariants({ variant: "outline" })}
                to={LOGIN_ROUTE}
              >
                Sign in
              </Link>
              <Link
                className={buttonVariants({ variant: "default" })}
                to={REGISTRATION_ROUTE}
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
});
