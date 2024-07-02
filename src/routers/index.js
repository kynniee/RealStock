import ProductsDetailsPage from "../components/ProductsDetailsPage/ProductsDetailsPage";
import SignInPage from "../components/SignInPage/SignInPage";
import SignUpPage from "../components/SignUpPage/SignUpPage";
import TypeProductPage from "../components/TypeProductPage/TypeProductPage";
import HomePage from "../page/HomePage/HomePage";
import NotFoundPage from "../page/NotFoundPage/NotFoundPage";
import OrderPage from "../page/OrderPage/OrderPage";
import ProductsPage from "../page/ProductsPage/ProductsPage";


export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true

    },
    
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true

    },
    {
        path: '/:type',
        page: TypeProductPage,
        isShowHeader: true

    },
    {
        path: '/sign-in',
        page: SignInPage,
        isShowHeader: true

    },
    {
        path: '/sign-up',
        page: SignUpPage,
        isShowHeader: true

    },
    {
        path: '/product-details',
        page: ProductsDetailsPage,
        isShowHeader: true

    },
    {
        path: '*',
        page: NotFoundPage
    },
]