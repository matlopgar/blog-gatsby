import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Avatar from "../Avatar";
import * as S from "./styled"
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
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>{author}</S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfilePosition>{position}</S.ProfilePosition>
      <S.ProfileDescription>{description}</S.ProfileDescription>

    </S.ProfileWrapper>
  )
}

export default Profile