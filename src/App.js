import { RouterProvider } from 'react-router-dom';
import './App.css';
import ProductProvider from './context/productProvider';
import Form from './pages/Form/Form.js';
import routes from './routes/routes';

function App() {
  return (
    <>
      <ProductProvider>
      {/* <Container /> */}
      {/* <Form /> */}
        <RouterProvider router={routes} />
      </ProductProvider>
    </>
  );
}

export default App;
