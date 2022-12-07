import { styled } from 'styles/globalStitches'

import Header from './Header'

interface HomeLayoutProps {
  header?: JSX.Element
  footer?: JSX.Element
  content?: JSX.Element
}

const Layout = ({ content }: HomeLayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>{content}</ContentWrapper>
      <footer></footer>
    </Wrapper>
  )
}

export default Layout

// STYLE  ////////////////////////////
const Wrapper = styled('div', {
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  backgroundColor: '$background',
})

const ContentWrapper = styled('div', {
  padding: '0 50px',
})
