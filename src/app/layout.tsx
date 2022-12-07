import { ReactNode } from 'react'

import Col from 'components/common/_Grid/Col'

import '../styles/global.scss'
import { ServerStylesheet } from './ServerStylesSheet'

const MyApp = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <head>
        <title>Easurmind</title>
      </head>
      <body>
        <ServerStylesheet>
          <Col>
            <nav>header</nav>
            {children}
            <footer>footer</footer>
          </Col>
        </ServerStylesheet>
      </body>
    </html>
  )
}

export default MyApp
