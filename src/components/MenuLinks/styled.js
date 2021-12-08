import styled from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"

export const MenuLinksWrapper = styled.nav`
display: flex;
${media.lessThan("large")`
margin-right: 50px;    
    `}
    


`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  ${media.lessThan("large")`
    display: flex;
    
    `}
    ${media.lessThan("small")`
    display: none;  
        `}

`

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;
  .active {
    color: var(--highlight);
  }
  ${media.lessThan("large")`
    margin: 0 10px 0 10px;
    
    `}
`

export const MenuLinksLink = styled(Link)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highlight);
  }
`