import { AdminPage } from "./pages/AdminPage";
import { BasketPage } from "./pages/BasketPage";
import { LoginPage } from "./pages/LoginPage";
import { RegPage } from "./pages/RegPage";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { NotFound } from "./pages/NotFound";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  NOT_FOUND_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
} from "./lib/constants";

export const AuthRoutes = [
  {
    path: ADMIN_ROUTE,
    Element: AdminPage,
  },
  {
    path: BASKET_ROUTE,
    Element: BasketPage,
  },
];

export const PublicRoutes = [
  {
    path: HOME_ROUTE,
    Element: HomePage,
  },
  {
    path: LOGIN_ROUTE,
    Element: LoginPage,
  },
  {
    path: REGISTRATION_ROUTE,
    Element: RegPage,
  },
  {
    path: PRODUCT_ROUTE + "/:id",
    Element: ProductPage,
  },
  {
    path: NOT_FOUND_ROUTE,
    Element: NotFound,
  },
];
