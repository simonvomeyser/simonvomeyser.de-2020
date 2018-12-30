import React from 'react'
import { withIntl, Link } from '../i18n'

import Layout from '../components/layout'

const Imprint = () => (
  <Layout>
    <h1>Imprint</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi expedita iure quisquam soluta nemo modi dolores vel debitis suscipit, cumque iusto accusamus nihil impedit esse amet laboriosam animi veritatis neque.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default withIntl(Imprint);
