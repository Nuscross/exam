import { Provider } from 'react-redux';
import { AppProvider } from './management/context';
import { store } from './management/store';
import { ToastContainer } from 'react-toastify';
import Route from "./components/Route";
import 'react-toastify/dist/ReactToastify.css';

const ShoppingCart = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <ToastContainer position="top-center" autoClose={2500} theme="dark" />
        <Route />
      </AppProvider>
    </Provider>
  )
}

export default ShoppingCart;