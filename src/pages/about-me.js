import React from 'react'
import { withIntl } from 'i18n'
import Layout from 'components/Layout'
import PageLayout from 'components/PageLayout'

const IndexPage = () => (
  <Layout>
    <PageLayout>
      <h1>About me</h1>
      <p>Per platea est ut nibh a habitant</p>
      <p>
        Mattis rutrum nostra curae scelerisque varius purus quam taciti risus
        aenean tristique praesent quisque placerat, bibendum velit primis
        euismod lacus integer mauris dolor ornare mollis ad pellentesque cras.
        Cras mauris platea massa eu magna tellus venenatis nam molestie bibendum
        lorem facilisis, auctor potenti luctus viverra congue mus erat inceptos
        dolor lectus ornare nec, tincidunt varius vestibulum ridiculus purus
        parturient vel dis orci sagittis aliquet. Ridiculus pretium lectus
        consectetur dis inceptos quisque eleifend eu imperdiet, hendrerit semper
        praesent gravida viverra blandit dolor magna, diam euismod sapien luctus
        torquent lorem mollis tincidunt.
      </p>
    </PageLayout>
  </Layout>
)

export default withIntl(IndexPage)
