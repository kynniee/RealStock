import ProductsDetailsPage from "../page/ProductsDetailsPage/ProductsDetailsPage";
import SignInPage from "../page/SignInPage/SignInPage";
import SignUpPage from "../page/SignUpPage/SignUpPage";
import TypeProductPage from "../page/TypeProductPage/TypeProductPage";
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