import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface AuthFormProps {
  title: string;
  AuthRoutes: React.ReactNode;
}

export const AuthForm = ({ title, AuthRoutes }: AuthFormProps) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-[350px]">
      <h1 className="text-center text-2xl font-bold">{title}</h1>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="Password" />
      </div>
      <Button>Enter</Button>
      <span className="text-center">{AuthRoutes}</span>
    </div>
  );
};
