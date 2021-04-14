import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from "react-router-dom";


function Header({ cartItems, user, signOut }) {

    const getCount = () => {
        let count = 0;
        // Loop through all cart items
        cartItems.forEach((item) => {
            // add the quantity of the cart item to tota;
            count += item.product.quantity;
        })

        return count;
    }

    return (
            <Container>

            {/* HEADER LOGO */}
            <HeaderLogo> 
            <Link to ="/">
            <img src={"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"} />
            </Link>
            </HeaderLogo>
                
            {/* HEADER OPTION ADDRESS */}
            <HeaderOptionAddress>
                <LocationOnIcon />

                <HeaderOption>

                <OptionLineOne>Hello</OptionLineOne>
                <OptionLineTwo>Select Your Address</OptionLineTwo>

                </HeaderOption>

            </HeaderOptionAddress>


            {/* HEADER SEARCH BAR w/ ICON */}
            <HeaderSearch>
                <HeaderSearchInput type="text"/>

                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>

            </HeaderSearch>

            {/* HELLO {NAME} ACCOUNT & LIST
                RETURN * ORDERS
                CART ICON */}
            <HeaderNavItems>

                <HeaderOption onClick={signOut}>
                    <OptionLineOne>Hello, {user.name}</OptionLineOne>
                    <OptionLineTwo>Account & Lists</OptionLineTwo>
                </HeaderOption>

                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>

                {/* CART LOGO LINK TO CART PAGE */}
                <HeaderOptionCart>
                <Link to ="/cart">
                    <ShoppingBasketIcon />
                    <CartCount> {getCount()} </CartCount>
                    </Link>
                </HeaderOptionCart>
                


            </HeaderNavItems>

            

            </Container>
        
    )
}

export default Header;

const Container = styled.div`
    height: 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`;

const HeaderLogo = styled.div`
img{
    width: 100px;
    margin-left: 11px;
}`;

const HeaderOptionAddress = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
`;

const OptionLineOne = styled.div``;

const OptionLineTwo = styled.div`
    font-weight: 700;
`;

const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    margin-left: 4px;
    background-color: white;
    :focus-within{
        box-shadow: 0 0 0 3px #F90;
    }
`;

const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 0;
    :focus {
        outline: none;
    }
`;

const HeaderSearchIconContainer = styled.div`
    background-color: #FEBD69;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderNavItems = styled.div`
    display: flex;
    /* justify-content: ; */
`;

const HeaderOption = styled.div`
    // TRouBLe
    // padding top, right, bottom, left
    padding: 10px 9px 10px 9px;
`;

const HeaderOptionCart = styled.div`
    display: flex;
    a {
        display: flex;
        align-items: center;
        padding-right: 9px;
        color: white;
        text-decoration: none;
    }

`;

const CartCount = styled.div`
    padding-left: 4px;
    font-weight: 700;
    color: #F08804;
`;