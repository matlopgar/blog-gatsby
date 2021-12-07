import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <PostItem 
      slug="/about/"
      background="#000000"
      category="Dog"
      date="7 Dec 2020"
      timeToRead="5"
      title="Demystify NgRx"
      description="Angular state manager is not rocket science"
    />
  </Layout>
)

export default IndexPage
