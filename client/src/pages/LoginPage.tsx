import { AuthForm } from "@/components/AuthForm";
import { REGISTRATION_ROUTE } from "@/lib/constants";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <AuthForm
        title="Sign in"
        AuthRoutes={
          <>
            Don't have an account?{" "}
            <Link
              className="font-medium text-primary underline"
              to={REGISTRATION_ROUTE}
            >
              Sign up
            </Link>
          </>
        }
      />
    </div>
  );
};
