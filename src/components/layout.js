import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import logo from '../../static/svgs/frisbee.svg'

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query { site { siteMetadata { title } } }`
  )

  const Nav = () => (
    <header style={{display: 'flex', justifyContent: 'space-between'}}>
      <img src={logo} alt='frisbee dog'></img><Link to={`/`}><h3>Logo of {data.site.siteMetadata.title}</h3></Link>
      <nav style={{display: 'flex', justifyContent: 'space-between', flex: 1}}>
        <Link to={`/about/`}>Syllabus</Link>
        <Link to={`/about/`}>FAQ</Link>
        <Link to={`/about/`}>Payment</Link>
      </nav>
    </header>
  )

  const Footer = () => (
    <footer>

    </footer>
  )

  return (
  <div>
    <Nav />
    {children}
    <Footer />
  </div>
  )
}