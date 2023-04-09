import { createContext } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';

export const TshirtData = createContext([]);

function App() {
    const [data, cartData] = useLoaderData();
    console.log(data);
    return (
        <div className="app">
            <Navbar />
            <TshirtData.Provider>
                <Outlet />
            </TshirtData.Provider>
            <Link
                to="/"
                style={{
                    margin: '0px 20px 0px 20px',
                    color: 'black',
                    fontWeight: 'bold'
                }}>
                Go Back
            </Link>
        </div>
    );
}

export default App;
