import styled from "styled-components"
import Footer from './footer'

export default function Bottom_Menu() {
return (
    <PageBottom>
    <BottomMenu>
        <BottomMenuSection>
        <BottomMenuHeading>Account</BottomMenuHeading>
            <BottomMenuItem>Login</BottomMenuItem>
            <BottomMenuItem>Sign Up</BottomMenuItem>
            <BottomMenuItem>Redeem a Gift Card</BottomMenuItem>
        </BottomMenuSection>
        <BottomMenuSection>
        <BottomMenuHeading>Company</BottomMenuHeading>
            <BottomMenuItem>VIP Lounge Rewards</BottomMenuItem>
            <BottomMenuItem>Reviews</BottomMenuItem>
            <BottomMenuItem>Sustainability</BottomMenuItem>
            <BottomMenuItem>Recycling Scheme</BottomMenuItem>
            <BottomMenuItem>About Us</BottomMenuItem>
            <BottomMenuItem>Become An Affiliate</BottomMenuItem>
            <BottomMenuItem>Careers</BottomMenuItem>
            <BottomMenuItem>Stockists</BottomMenuItem>
        </BottomMenuSection>
        <BottomMenuSection>
        <BottomMenuHeading>Get Help</BottomMenuHeading>
            <BottomMenuItem>Contact Us</BottomMenuItem>
            <BottomMenuItem>FAQs</BottomMenuItem>
            <BottomMenuItem>Shipping Information</BottomMenuItem>
            <BottomMenuItem>Return Policy</BottomMenuItem>
        </BottomMenuSection>
    </BottomMenu>
    <BottomMenuLine />
    <Footer />
    </PageBottom>
    )
}

const BottomMenu = styled.div`
display: flex;
flex-direction: row;
@media (max-width: 700px) {
    flex-direction: column;
}
`

const PageBottom = styled.div`
background-color: #292B39;
margin-top: 0;
color: white;
display: flex;
flex-direction: column;`

const BottomMenuSection = styled.div`
display: flex;
flex-direction: column;
margin-top: 5rem;
margin-left: 7rem;
@media (max-width: 700px) {
    margin-top: 2rem;
    margin-left: 1.5rem;
}`

const BottomMenuHeading = styled.span`
display: flex;
flex-direction: column;
font-size: 1.2rem;
:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: .3s;
}
`

const BottomMenuItem = styled.span`
opacity: 50%;
margin-top: 1.2rem;
:hover {
    cursor: pointer;
}
`

const BottomMenuLine = styled.div`
border-top: 1px solid grey;
opacity: 50%;
width: 93%;
justify-content: center;
margin-top: 3rem;
margin-left: 3rem;
@media (max-width: 700px) {
    margin-left: 1rem;
    width: 90%;
}`