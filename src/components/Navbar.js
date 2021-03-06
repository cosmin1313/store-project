import React, { Component } from "react"
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand w3-animate-left"></img>
                </Link>

                <ul className="navbar-nav allign-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link  w3-animate-left">
                            products
                        </Link>
                    </li>
                </ul>

                <Link to="/cart" className="ml-auto w3-animate-right">
                    <ButtonContainer>
                        <span style={{ "marginRight": "0.8rem" }}>
                            <i className="fa fa-shopping-cart "></i>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform: capitalize;
}
`
