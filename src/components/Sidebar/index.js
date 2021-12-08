import React from "react";
import Profile from '../Profile'
import * as S from './styled'
import SocialLinks from '../SocialLinks'
import MenuLinks from "../MenuLinks";

const Sidebar = () => (
    <S.SidebarWrapper>
        <Profile />
        <S.SocialWrapp>
        <SocialLinks />
        </S.SocialWrapp>
        
        <MenuLinks />
        
    </S.SidebarWrapper>
)

export default Sidebar