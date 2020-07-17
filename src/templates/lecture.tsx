import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"

const Lecture: React.FC<any> = ({ data }) => {
  return (
    <Layout>
        <div dangerouslySetInnerHTML={{ __html: data.jupyterNotebook.html }} />
    </Layout>
  )
}

export default Lecture

export const query = graphql`
  query($slug: String!) {
    jupyterNotebook(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`
