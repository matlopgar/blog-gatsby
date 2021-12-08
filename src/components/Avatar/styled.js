import styled from "styled-components";
import Img from "gatsby-image";
import media from "styled-media-query"

export const AvatarWrapper = styled(Img)`
    height: 3.75rem;
    margin: auto;
    width: 3.75rem;

    ${media.lessThan("large")`
        height: 2.5rem;
        width: 2.5rem;
    `}
`