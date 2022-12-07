import Text from 'components/common/Text'
import Col from 'components/common/_Grid/Col'
import Row from 'components/common/_Grid/Row'
import { styled } from 'styles/globalStitches'

interface ProductCardProps {
  title: string
  price: number
}

const ProductCard = ({ title, price }: ProductCardProps) => {
  return (
    <Card>
      <ImgWrapper>
        <img
          src="https://img.29cm.co.kr/contents/itemDetail/201702/cut4_320170216150109.jpg?width=500"
          loading="lazy"
        />
      </ImgWrapper>
      <Detail>
        <Text>{title}</Text>
        <Text>{price}</Text>
      </Detail>
      <IconsWrapper>123</IconsWrapper>
    </Card>
  )
}

export default ProductCard

// STYLE ////////////////////////////////

const Card = styled(Col, {
  position: 'relative',
  maxWidth: '250px',
  height: '400px',
  boxShadow: '$boxShadow',
  borderRadius: '3px',
})

const ImgWrapper = styled('div', {
  width: '100%',
  height: 'auto',

  '& img': {
    width: '100%',
  },
})

const Detail = styled(Col, {
  marginTop: '15px',
  padding: '0 10px',
  gap: '5px',
})

const IconsWrapper = styled(Row, {
  position: 'absolute',
  bottom: '10px',
  left: '0',
  padding: '0 10px',
})
