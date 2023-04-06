import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import About from '../pages/About';
import ContactUs from '../pages/ContactUs';
import Home from '../pages/Home';
import OrderReview from '../pages/OrderReview';
import UserDetails from '../pages/UserDetails';
import Users from '../pages/Users';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => fetch('data.json')
            },
            {
                path: '/order-review',
                element: <OrderReview />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            },
            {
                path: 'users',
                element: <Users />,
                loader: async () => fetch('https://jsonplaceholder.typicode.com/users')
            },
            {
                path: 'user-details/:id',
                element: <UserDetails />,
                loader: async ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            }
        ]
    }
]);
