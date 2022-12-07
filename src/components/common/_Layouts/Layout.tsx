import { styled } from 'styles/globalStitches'

interface HomeLayoutProps {
  header?: JSX.Element
  footer?: JSX.Element
  content?: JSX.Element
}

const Layout = ({ header, footer, content }: HomeLayoutProps) => {
  return (
    <Wrapper>
      {header}
      <ContentWrapper>{content}</ContentWrapper>
      {footer}
    </Wrapper>
  )
}

export default Layout

// STYLE  ////////////////////////////
const Wrapper = styled('div', {
  width: '100%',
  height: '100%',
})

const ContentWrapper = styled('div', {
  padding: '0 50px',
})
