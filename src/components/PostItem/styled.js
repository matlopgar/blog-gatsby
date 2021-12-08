import styled from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"

export const PostItemLink = styled(Link)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  &:hover {
    color: var(--highlight);
  }

  ${media.lessThan("large")`
  align-items: flex-start;
  flex-direction: column;
  padding: 1.5rem 0 1.5rem 0;
  overflow: hidden;
`}
`

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
`

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props => props.background};
  border-radius: 50%;
  color: var(--texts);
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;

  ${media.lessThan("large")`
  border-radius: 0;
  font-size: 1rem;
  min-height: auto;
  min-width: auto;
  padding: .2rem .5rem;
  margin: 0;
`}

`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`