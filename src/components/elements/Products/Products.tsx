import Header from 'components/common/_Layouts/Header'
import Layout from 'components/common/_Layouts/Layout'
import ProductsContent from './_fragments/ProductsContent'

const Products = () => {
  return <Layout header={<Header />} content={<ProductsContent />} />
}

export default Products
