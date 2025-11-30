import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import HomeTwo from "./pages/home-two";
import AllFood from "./pages/all-food/all-food";
import List from "./pages/all-food/list";
import Grid from "./pages/all-food/grid";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import BlogDetails from "./pages/blog-details";
import Dashboard from "./pages/dashboard";
import EditProfile from "./pages/dashboard/edit-profile";
import Address from "./pages/dashboard/address";
import Order from "./pages/dashboard/order";
import Wishlist from "./pages/dashboard/wishlist";
import Reviews from "./pages/dashboard/reviews";
import ChangePassword from "./pages/dashboard/changePassword";
import SignUp from "./pages/signup/signUp";
import SignIn from "./pages/signin";
import FoodDetails from "./pages/foodDetails/foodDetails";
import PrivacyAndPolicy from "./pages/privacyAndPolicy";
import ShoppingCart from "./pages/shopping-cart";
import ShoppingCartTwo from "./pages/shoppingCartTwo";
import ShoppingCartAddress from "./pages/shoppingCartAddress";
import ShoppingCartNewAddress from "./pages/shoppingCartNewAddress";
import TermsService from "./pages/terms-service";
import TrustSafety from "./pages/trust-safety";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home-two",
    element: <HomeTwo />,
  },
  {
    path: "/all-food",
    Component: AllFood,
    children: [
      {
        index: true,
        element: <Grid />,
      },
      {
        path: "list",
        element: <List />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog-details",
    element: <BlogDetails />,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        index: true,
        element: <EditProfile />,
      },
      {
        path: "edit-address",
        element: <Address />,
      },
      {
        path: "order&recordering",
        element: <Order />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/food-details",
    element: <FoodDetails />,
  },

  {
    path: "/shopping-cart",
    element: <ShoppingCart />,
  },
  {
    path: "/shopping-cart-two",
    element: <ShoppingCartTwo />,
  },
  {
    path: "/shopping-cart-address",
    element: <ShoppingCartAddress />,
  },
  {
    path: "/shopping-cart-new-address",
    element: <ShoppingCartNewAddress />,
  },
  {
    path: "/privacy-and-policy",
    element: <PrivacyAndPolicy />,
  },
  {
    path: "/terms-service",
    element: <TermsService />,
  },
  {
    path: "/trust-safety",
    element: <TrustSafety />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
