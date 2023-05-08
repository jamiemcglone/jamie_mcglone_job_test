import styled from "styled-components";
import { ReactSVG } from "react-svg";

export default function Best_Sellers_Card({item}) {
    return(
        <BestSellerRowItem>
        <img src={item.img} />
            <BestSellerInfo>
            <BestSellerDescription>
                <BestSellerName>{item.name}</BestSellerName>
                <BestSellerPrice>£{item.price}</BestSellerPrice>
            </BestSellerDescription>
            <HeartIcon>      
                <ReactSVG src="/Developer-Test-Assets/heart.svg" />
            </HeartIcon>
            </BestSellerInfo>
        </BestSellerRowItem>
    )
}

const BestSellerDescription = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
gap: 1rem;`

const BestSellerInfo = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;`

const BestSellerName = styled.div`
color: black;
margin-top: 2rem;`

const BestSellerPrice = styled.div`
color: black;
opacity: 45%;`

const BestSellerRowItem = styled.div`
display: flex;
flex-direction: column;
width: 24%;
margin: 1.5rem;
margin-right: -5.5rem;
@media (max-width: 700px) {
    width: 70%;
}
`

const HeartIcon = styled.div`
margin-top: 2rem;`