import React from "react"

import { Home } from '@styled-icons/boxicons-solid/Home'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { Bulb as Light } from '@styled-icons/boxicons-regular/Bulb'


import * as S from "./styled"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search/" title="Search">
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarItem title="Theme">
        <Light />
      </S.MenuBarItem>
    </S.MenuBarGroup>
    
      
    
  </S.MenuBarWrapper>
)

export default MenuBar