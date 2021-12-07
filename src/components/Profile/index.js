import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Avatar from "../Avatar";
const Profile = () => {
  const {
    site: {
      siteMetadata: {
        position, description, author
      },
    },
  } = useStaticQuery(graphql`
  query Metadata {
      site {
        siteMetadata {
          position
          description
          author
        }
      }
    }   
  `)

  return (
    <div className="Profile-wrapper">
      <Avatar />
      <h1>{author}</h1>
      <h2>{position}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Profile