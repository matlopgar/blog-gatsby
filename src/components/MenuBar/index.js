import React, { useState, useEffect } from "react"
import { Home } from '@styled-icons/material/Home'
import { Lightbulb as Light } from '@styled-icons/material/Lightbulb'
import { Question } from '@styled-icons/remix-line/Question' 
import { Heart } from "@styled-icons/ionicons-outline/Heart"


import * as S from "./styled"

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const isDarkmode = theme === 'dark';
  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])


  return (<S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/about/" title="About">
        <S.MenuBarItem>
          <Question />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink href="https://www.pixilart.com/matheusgarcia"
              title="Art"
              target="_blank"
              rel="noopener noreferrer">
        <S.MenuBarItem>
          <Heart />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarItem title="Theme" onClick={() => {
        window.__setPreferredTheme(isDarkmode ? 'light' : 'dark')
      }}
      className={theme}
      >       
        <Light />
      </S.MenuBarItem>
    </S.MenuBarGroup>



  </S.MenuBarWrapper>)
}

export default MenuBar