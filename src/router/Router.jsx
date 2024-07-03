import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Layout from "../components/layout/Layout";
import MyPage from "../pages/MyPage";
import LoginPage from "../pages/LoginPage";

/**
 *
 * TODO
 * 각 페이지에 해당하는 라우터를
 * 작성해주시길 바랍니다.
 *
 */

const Router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        element: <Layout />,
        children: [
        {
            path: "/",
            element: <MainPage />,
        },
        {
            path: "/my",
            element: <MyPage />,
        },
        ],
    },
]);

export default Router;
