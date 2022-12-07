import { styled } from 'styles/globalStitches'
import ProductCard from './ProductCard'

const ProductsContent = () => {
  return (
    <Wrapper>
      <ProductCard title="d" price={1} />
    </Wrapper>
  )
}

export default ProductsContent

// STYLE ////////////////////////////////////////////

const Wrapper = styled('div', {
  paddingTop: '45px',
})
