import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { Layout } from "./components/Layout";
import { observer } from "mobx-react-lite";
import { Context } from "./main";
import { useContext, useEffect, useState } from "react";
import { check } from "./http/userAPI";
import { Loading } from "./components/Loading";
export const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      check()
        .then((data) => {
          user.setUser(data);
          user.setIsAuth(true);
        })
        .catch((error) => {
          console.log("Ошибка аутентификации:", error);
        })
        .finally(() => setLoading(false));
    }, 1000);
  }, [user]);

  if (loading) return <Loading />;

  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
});
