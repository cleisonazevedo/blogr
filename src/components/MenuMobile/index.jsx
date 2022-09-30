import { Container, Menu, MenuLogin } from "./styled";

import { useEffect } from "react";

import { IoClose } from 'react-icons/io5';


const MenuMoblie = ({ isVisible, setIsVisible }) => {

   useEffect(() => {
        document.body.style.overflowY = isVisible ? 'hidden' : 'auto';
   }, [isVisible]);

    return (
        <Container isVisible={isVisible}>
            <IoClose size={30} onClick={() => setIsVisible(false)}/>
            <Menu>
                <a href="#">Product</a>
                <a href="#">Company</a>
                <a href="#">Connect</a>
                <MenuLogin>
                    <a href="#">Login</a>
                    <button>Sign Up</button>
                </MenuLogin>

            </Menu>
        </Container>
    )
};

export default MenuMoblie;