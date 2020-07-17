import React from "react"
import { Link, PageProps, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Lectures: React.FC<any> = props => {
  return (
    <div>
      <h2>We have {props.count} lectures</h2>
      <ol>
        {props.lectures.map(({ node }) => (
          <Link
            to={node.fields.slug}
            key={node.id}
            css={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            <li>{node.parent.name}</li>
          </Link>
        ))}
      </ol>
    </div>
  )
}

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const lectures = data.allJupyterNotebook.edges
  const lectures_count = data.allJupyterNotebook.totalCount
  return (
    <Layout>
      <SEO title="Python Handbook" />
      <Lectures lectures={lectures} count={lectures_count} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allJupyterNotebook {
      edges {
        node {
          id
          parent {
            ... on File {
              name
            }
          }
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`
