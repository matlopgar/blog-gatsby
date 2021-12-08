import styled from "styled-components";
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 17rem;

  ${media.lessThan("large")`
  align-items: flex-start;    
  flex-direction: row;
  height: auto;
  padding: 1rem 2rem;
  width: 100%;
  justify-content: space-between;
  `}
`

export const SocialWrapp = styled.div`
align-items: center;
display: flex;
justify-content: space-evenly;
width: 100%;
${media.lessThan("large")`
display: none;
`}
`