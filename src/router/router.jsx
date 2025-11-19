import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import CreateCoupon from "../Pages/CreateCoupon";
import BestCoupon from "../Pages/BestCoupon";
import CouponList from "../Pages/CouponList";
import MainLayout from "../Layouts/MainLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/create-coupon",
        element: <CreateCoupon />,
      },
      {
        path: "/best-coupon",
        element: <BestCoupon />,
      },
      {
        path: "/coupons",
        element: <CouponList />,
      },
    ]
  },

]);

export default router
