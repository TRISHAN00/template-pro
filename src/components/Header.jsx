import React from "react";
import { Button, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

export default function Header() {
  const NavbarWrapper = styled.nav`
    background-color: white;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
  `;

  const NavContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const NavLogo = styled.a`
    font-size: 1.75rem;
    font-weight: 700;
    color: #333;
    text-decoration: none;

    &:hover {
      color: #4361ee;
    }
  `;

  const NavLinks = styled.div`
    display: flex;
    gap: 1.5rem;

    @media (max-width: 768px) {
      display: none;
    }
  `;

  const NavLink = styled.a`
    color: #666;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: #4361ee;
    }
  `;

  const CartButton = styled(Button)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: transparent;
    color: #4361ee;
    border: 1px solid #4361ee;

    &:hover {
      background-color: #4361ee;
      color: white;
    }
  `;

  const NavButtons = styled.div`
    display: flex;
    gap: 1rem;
  `;

  const PrimaryButton = styled(Button)`
    background-color: #ff6b6b;
    border: none;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:hover {
      background-color: #ff5252;
      transform: translateY(-2px);
    }
  `;

  return (
    <>
      <NavbarWrapper>
        <NavContainer>
          <NavLogo href="#">TemplatePro</NavLogo>
          <NavLinks>
            <NavLink href="#templates">Templates</NavLink>
            <NavLink href="#categories">Categories</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#support">Support</NavLink>
          </NavLinks>
          <NavButtons>
            <CartButton>
              <FaShoppingCart /> Cart (0)
            </CartButton>
            <PrimaryButton>Login</PrimaryButton>
          </NavButtons>
        </NavContainer>
      </NavbarWrapper>
    </>
  );
}
