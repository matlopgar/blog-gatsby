import styled from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
  transition: background 0.5s;
  ${media.lessThan("large")`
    border-top: 1px solid var(--borders);
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
    justify-content: center;
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    flex-direction: row;    
  `}
`

export const MenuBarLink = styled(Link)`
  display: block;
  &.active {
    span {
      color: var(--highlight);
    }
  }
`

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 2rem;
  padding: 1.1rem;
  position: relative;
  width: 2rem;
  &.light{
    color: #e2e244;
    &:hover{
      color: #e2e244;
    }
  }
  &:hover {
    color: var(--highlight);
  }
  ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);
    }
  `}
  ${media.lessThan("large")`
    height: 1.4rem;
    padding: .9rem;
    position: relative;
    width: 1.4rem;
  `}
`