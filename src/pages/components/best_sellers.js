import styled from "styled-components"
import Best_Sellers_Card from "./best_seller_card";

export default function Best_Sellers() {

    const best_sellers_items = [
        {name: "Fredo Jacket", img: "/Developer-Test-Assets/product-image-1.png", price: 230},
        {name: "Powell Jacket", img: "/Developer-Test-Assets/product-image-2.png", price: 350},
        {name: "Lazar Jacket in Denim", img: "/Developer-Test-Assets/product-image-3.png", price: 395},
        {name: "Lazar Jacket in Black", img: "/Developer-Test-Assets/product-image-4.png", price: 395},
        {name: "Lazar Leather Jacket", img: "/Developer-Test-Assets/product-image-5.png", price: 395}    
    ]

    const best_sellers_list = best_sellers_items.map((item, index) => {
        return <Best_Sellers_Card item={item} key={index} />
    })
    return (
        <>
        <BestSellerHeading>
        <BestSellersTitle>Best Sellers</BestSellersTitle>
        <ShopAllCard>
            <ShopAllText>Shop All</ShopAllText>
        </ShopAllCard>
        </BestSellerHeading>
        <BestSellerRow>
            {best_sellers_list}
        </BestSellerRow>
        </>
    )
}

const BestSellersTitle = styled.p`
opacity: 70%;
font-weight: normal;
font-size: 1.5rem;
margin-left: 2rem;
margin-top: 5rem;
margin-bottom: 1rem;
font-weight: 540;
`

const BestSellerRow = styled.div`
display: flex;
flex-direction: row;
gap: 5rem;
flex-wrap: nowrap;
overflow-x: scroll;
width: 100%;
`
const BestSellerHeading = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;`

const ShopAllCard = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 10%;
height: 5vh;
margin-top: 5rem;
align-items: center;
margin-right: 2rem;
:hover {
    transform: scale(1.05);
    transition: .3s;
    cursor: pointer;
    text-decoration: underline;
}
@media (max-width: 700px) {
    width: 20%;
}`

const ShopAllText = styled.div`
text-align: center;
align-items: center;
`