import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Shop from './Components/Shop/Shop'
import Inventory from './Components/Inventory/Inventory';
import About from './Components/About/About';
import Orders from './Components/Orders/Orders';
import { ProductsAndCarts } from './loaders/ProductsAndCarts';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children:[
      {
        path:'/',
        loader: () => fetch('products.json') ,
        element: <Shop></Shop>
      },
      {
        path: 'order',
        loader: ProductsAndCarts ,
        element: <Orders></Orders>
      },
      {
        path: 'manage-inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'about',
        element: <About></About>
      }
    ]
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
