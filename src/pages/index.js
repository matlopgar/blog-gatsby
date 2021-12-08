import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <PostItem 
      slug="/about/"
      background="#9FA2B2"
      category="NGRX"
      date="26 Nov 2021"
      timeToRead="10"
      title="Demystify NgRx"
      description="Angular state manager is not rocket science"
    />
  </Layout>
)

export default IndexPage
