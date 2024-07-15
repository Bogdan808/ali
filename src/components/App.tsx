import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppRoutes } from '../core/routes'
import Home from '../pages/Main'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import { Layout } from './Layout/Layout'
import ProductDetails from '../pages/ProductDetails'

function App() {
  return (
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
  )
}

export default App
