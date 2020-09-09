import React, {useState} from "react";
import {Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from "reactstrap"
import "../Stylesheet/navigation.scss"
import Logo from "../image/logo.png"
import SearchIcon from "../image/search.svg"
import CartIcon from "../image/cart.svg"
import { useHistory } from "react-router";
import { withRouter } from "react-router";
const Navigation = (props) =>{
    const [isOpen, setIsOpen] = useState(false);
    const [searchInput, setSearchInput] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const history = useHistory();
    const toggle = () => {
        setIsOpen(!isOpen)
        setSearchInput(false)
    };
    return(
        <div>
            <Container>
                <Navbar light expand="md">
                    <NavbarBrand href="/"><img src={Logo}/></NavbarBrand>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">HOME</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">SHOP</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">MAGAZINE</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <Nav className="ml-auto right-nav" navbar>
                        <NavItem>
                            <img className={"search-icon"} src={SearchIcon} onClick={()=> {
                                setIsOpen(false)
                                setSearchInput(!searchInput)
                            }}/>
                            {searchInput && <input className={"search-input"} placeholder={"Search"} onChange={(e)=>setSearchValue(e.target.value)}
                                onKeyPress={(e)=>{
                                    if(e.key === 'Enter'){
                                        history.push("/search/"+searchValue)
                                    }
                                }}
                            />}
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
                    <NavbarToggler onClick={toggle} className={"ml-4"}/>
                </Navbar>
            </Container>
        </div>
    )
}
export default withRouter(Navigation)