import { AuthForm } from "@/components/AuthForm";
import { Button } from "@/components/ui/button";
import { HOME_ROUTE, REGISTRATION_ROUTE } from "@/lib/constants";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="w-full relative flex flex-1">
      <Link to={HOME_ROUTE}>
        <Button className="mt-2 absolute" variant="outline">
          Back to home
        </Button>
      </Link>
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
    </div>
  );
};
