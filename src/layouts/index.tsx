import * as React from 'react'
import Link from 'gatsby-link'

const {Helmet} = require('react-helmet')

import './index.css'

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: any
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div>
        <Helmet
          title="The Archive"
          meta={[
            {name: 'description', content: ''},
            {name: 'keywords', content: ''},
            // Pinterest
            {name: 'p:domain_verify', content: '2eced04c7cbc5f9eb0f55d2913da5018'},
          ]}
        />
        {this.props.children()}
      </div>
    )
  }
}

export default DefaultLayout
