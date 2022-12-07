import Header from 'components/common/_Layouts/Header'
import Layout from 'components/common/_Layouts/Layout'
import CartContents from './_fragments/CartContents'

const Cart = () => {
  return <Layout header={<Header />} content={<CartContents />} />
}

export default Cart
