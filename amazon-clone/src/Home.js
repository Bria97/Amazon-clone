import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Product from './Product';
import { db } from './firebase';

function Home() {

        const [products, setProducts] = useState([]);

        const getProducts = () => {
            db.collection('products').onSnapshot((snapshot) => {
                let tempProducts = [];

                tempProducts = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    product: doc.data()
                }));

                setProducts(tempProducts);
                
            })
        }

        useEffect(() => {
            getProducts()
        }, [])

        console.log(products);

    return (
<Container>

        {/* STREAM MUSIC FREE AREA */}
        <Banner>

        </Banner>

        {/* PRODUCT ITEMS AREA */}
        <Content>
            <Product />
            <Product /> 
        </Content>

</Container>
    )
}

export default Home;

const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`;

const Banner = styled.div`
background-image: url('https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/caltrain/WORE_2021_GWBleedingHero_3000x1200_DATE_Final_en-US_HO_1._CB655700848_.jpg');
min-height: 600px;
background-position: center;
z-index: 1;
//linear gradient from image to bottom from black to white with zero opacity
mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
// adapts responsively to the screen
background-size: cover;
`;

const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -350px;
    display: flex;
`;