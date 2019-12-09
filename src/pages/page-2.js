import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CodeHengeFlexLogo from "../components/CodeHengeFlexLogo"

const SecondPage = () => (
  <>
  <Layout>
    <SEO title="Page two" />
    <div className="p-grid">
      <div className="p-col-2">A blog about KSM career development projects</div>
      <div className="p-col-2"> Another flex</div>
      <CodeHengeFlexLogo/>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
    </>
)

export default SecondPage
