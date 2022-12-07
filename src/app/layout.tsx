import { ReactNode } from 'react'

import Col from 'components/common/_Grid/Col'

import '../styles/global.scss'
import { styled } from 'styles/globalStitches'

import { ServerStylesheet } from './ServerStylesSheet'

const MyApp = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <title>Easurmind</title>
      </head>
      <body>
        <ServerStylesheet>
          <Wrapper>
            <Navbar>header</Navbar>
            <ContentWrapper>{children}</ContentWrapper>
            <footer>footer</footer>
          </Wrapper>
        </ServerStylesheet>
      </body>
    </html>
  )
}

export default MyApp

const Wrapper = styled(Col, {
  width: '100%',
  height: '100%',
})

const Navbar = styled('nav', {
  display: 'flex',
  height: '56px',
  padding: '8px 10px',
})

const ContentWrapper = styled('main', {
  display: 'flex',
  justifyContent: 'center',
  padding: '30px 20px 0px 20px',
})
