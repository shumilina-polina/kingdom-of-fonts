import * as React from "react"
import { AccessWrapper, NotFoundText } from "../components/access-page/style"
import Layout from "../components/Layout"
import { Container } from "../global"

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Container>
        <AccessWrapper>
          <NotFoundText>404 <span>Страница не найдена :(</span></NotFoundText>
        </AccessWrapper>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
