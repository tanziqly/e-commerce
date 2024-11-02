import { AuthForm } from "@/components/AuthForm";
import { LOGIN_ROUTE } from "@/lib/constants";
import { Link } from "react-router-dom";

export const RegPage = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <AuthForm
        title="Sign up"
        AuthRoutes={
          <>
            Already have an account?{" "}
            <Link
              className="font-medium text-primary underline"
              to={LOGIN_ROUTE}
            >
              Sign in
            </Link>
          </>
        }
      />
    </div>
  );
};
