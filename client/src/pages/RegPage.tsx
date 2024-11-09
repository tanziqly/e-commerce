import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registration } from "@/http/userAPI";
import { LOGIN_ROUTE, HOME_ROUTE } from "@/lib/constants";
import { Context } from "@/main";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

export const RegPage = observer(() => {
  const { user } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let data;

  const click = async () => {
    data = await registration(email, password);
    console.log(data);
  };

  user.setUser(user);

  return (
    <div className="w-full relative flex flex-1">
      <Link to={HOME_ROUTE}>
        <Button className="mt-2 absolute" variant="outline">
          Back to home
        </Button>
      </Link>
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col gap-4 w-full max-w-[350px]">
          <h1 className="text-center text-2xl font-bold">Sign up</h1>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <Button onClick={click}>Enter</Button>
          <span className="text-center">
            Don't have an account? <Link to={LOGIN_ROUTE}>Sign up</Link>
          </span>
        </div>
      </div>
    </div>
  );
});
