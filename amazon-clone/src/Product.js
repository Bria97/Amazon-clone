import React from 'react';
import styled from 'styled-components';
import { db } from './firebase';

function Product({ title, price, rating, image, id }) {

    const addToCart = () => {
        console.log(id);
        const cartItem = db.collection("cartItems").doc(id);
        cartItem.get()
        .then((doc)=>{
            console.log(doc);
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            } else {
                db.collection("cartItems").doc(id).set({
                    name: title,
                    image: image,
                    price: price,
                    quantity: 1
                })
            }
        })
    }

    return (
        <Container>
            {/* PRODUCT NAME */}
            <Title>
                { title }
            </Title>

            {/* PRODUCT PRICE */}
            <Price>
                ${ price }
            </Price>
            
            {/* PRODUCT RATING */}
            <Rating>
                {
                Array(rating)
                .fill()
                .map(rating => <p>⭐️</p>)
                }
            </Rating>


            {/* PRODUCT IMAGE */}
            <Image src={ image } />

            <ActionSection>
            {/* Add To Cart */}
             <AddToCartButton
                onClick={addToCart}
             >
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

const Rating = styled.div`
    display: flex;
`;

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
    cursor: pointer;
`;

