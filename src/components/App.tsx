import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppRoutes } from '../core/routes'
import Home from '../pages/Main'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import { Layout } from './layout/Layout'
import ProductDetails from '../pages/ProductDetails'
import { CartProvider } from '../features/header/components/Cart/store/cartStore'

function App() {
  return (
    <CartProvider value={null}>
      <Router>
        <Layout>
          <Routes>
            <Route path={AppRoutes.main} element={<Home />} />
            <Route path={AppRoutes.products} element={<Products />} />
            <Route path={AppRoutes.productsId} element={<ProductDetails />} />
            <Route path={AppRoutes.cart} element={<Cart />} />
            <Route path={AppRoutes.checkout} element={<Checkout />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  )
}

export default App
