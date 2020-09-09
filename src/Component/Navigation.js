import React, {useState} from "react";
import {Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from "reactstrap"
import "../Stylesheet/navigation.scss"
import Logo from "../image/logo.png"
import SearchIcon from "../image/search.svg"
import CartIcon from "../image/cart.svg"
const Navigation = (props) =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return(
        <div>

                    <Container>
                        <Navbar light expand="md">
                            <NavbarBrand href="/"><img src={Logo}/></NavbarBrand>
                            <NavbarToggler onClick={toggle} />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="mr-auto" navbar>
                                    <NavItem>
                                        <NavLink href="/components/">HOME</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="https://github.com/reactstrap/reactstrap">SHOP</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="https://github.com/reactstrap/reactstrap">MAGAZINE</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <img className={"search-icon"} src={SearchIcon}/>
                                    <input className={"search-input"}/>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">
                                        <img className={"cart-icon"} src={CartIcon}/>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">Login</NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                    </Container>

        </div>
    )
}
export default Navigation