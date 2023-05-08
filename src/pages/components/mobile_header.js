import { ReactSVG } from "react-svg"
import styled from "styled-components"
import { HeaderSearchBar, BarLogo, BarText } from "./header"

export default function Mobile_Header() {
    return(
        <MobileHeader>
        <MobileHeaderContainer>
            <TopLeftMenu>
                <ReactSVG src="/Developer-Test-Assets/menu-icon.svg" />
                <p>Menu</p>
            </TopLeftMenu>
            <img src="/Developer-Test-Assets/logo.svg"/>
            <BasketIcon>
                <ReactSVG src="/Developer-Test-Assets/bag-icon.svg" />
            </BasketIcon>
        </MobileHeaderContainer>
        <MobileHeaderLine />
                <HeaderSearchBar>
                <BarLogo>
                    <ReactSVG src="/Developer-Test-Assets/search.svg" />
                </BarLogo>
                <BarText>Search for 'Cashmere'</BarText>
            </HeaderSearchBar>
        </MobileHeader>
    )
}

const MobileHeaderContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
margin-top: .5rem;
margin-left: .5rem;
align-items: center;
`

const TopLeftMenu = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
gap: 1rem;
align-items: center;
margin-right: 4rem;`

const BasketIcon = styled.div`
margin-left: 6rem;
`

const MobileHeader = styled.div`
display: flex;
flex-direction: column;
@media (max-width: 700px) {
    display: flex;
}
@media (min-width: 700px) {
    display: none;
}
`

const MobileHeaderLine = styled.div`
border-bottom: 1px solid grey;
opacity: 40%;
width: 100%;`