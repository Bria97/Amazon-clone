import React from 'react';
import styled from 'styled-components';

function Product(props) {

    return (
        <Container>
            {/* PRODUCT NAME */}
            <Title>
                { props.title }
            </Title>

            {/* PRODUCT PRICE */}
            <Price>
                ${ props.price }
            </Price>
            
            {/* PRODUCT RATING */}
            <Rating>
            ⭐️⭐️⭐️⭐️⭐️
            </Rating>


            {/* PRODUCT IMAGE */}
            <Image src={props.image} />

            <ActionSection>
            {/* Add To Cart */}
             <AddToCartButton>
            Add to cart
            </AddToCartButton>                
            </ActionSection>

        </Container>
    )
}

export default Product;

const Container = styled.div`
    background-color: white;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
`;

const Title =styled.span``;

const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;

`;

const Rating = styled.div``;

const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`;

const ActionSection = styled.div`
    margin-top: 12px;
    display: grid;
    place-items: center;
`;

const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #F0C14B;
    border: 2px solid #A88734;
    border-radius: 2px;
`;

