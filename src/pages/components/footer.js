import styled from "styled-components";

export default function Footer(){
    return (
    <FooterText>
        <Copyright>@ Function 2023</Copyright>
        <Map>Sitemap</Map>
    </FooterText>
    )
}

const FooterText = styled.div`
    font-size: .8rem;
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    justify-content: center;
    margin-top: 2rem;
    align-items: center;
    margin-bottom: 4rem;
    
`

const Copyright = styled.span`

`

const Map = styled.span`
`