import { useState } from "react";

import { Button1, Button2, Container, HeaderButton, HeaderInfo, HeaderMenu, Menu } from "./styled";

import { GiHamburgerMenu } from 'react-icons/gi'

import MenuMoblie from "../MenuMobile";


const Header = () => {
    const [ isVisible, setIsVisible] = useState(false);

    return (
        <Container>
            <HeaderMenu>
                <Menu>
                    <h1>Blogr</h1>
                    <MenuMoblie 
                        isVisible={isVisible}
                        setIsVisible={setIsVisible}
                    />
                    <GiHamburgerMenu 
                        onClick={() => setIsVisible(true)}
                    />
                    {/* <a href="#">Product</a>
                    <a href="#">Company</a>
                    <a href="#">Connect</a> */}
                </Menu>
                {/* <Login>
                    <a href="#">Login</a>
                    <button>Sign Up</button>
                </Login> */}
            </HeaderMenu>
            <HeaderInfo>
                <h1>A modern publishing platform</h1>
                <p>Grow your audience and build your online brand</p>
            </HeaderInfo>
            <HeaderButton>
                <Button1>Start for free</Button1>
                <Button2>Learn More</Button2>
            </HeaderButton>
        </Container>
    )
};

export default Header;