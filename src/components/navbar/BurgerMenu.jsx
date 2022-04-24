import { useState } from 'react';
import styled from 'styled-components';

const StyledBurger = styled.div`
  @media (min-width: 576px) {
    display: none;
  }
`;

export const StyledBurgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    z-index: 100;
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => (open ? theme.light : theme.navy)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const StyledBurgerMenu = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.navy};
  color: ${({ theme }) => theme.light};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (min-width: 576px) {
    display: none;
  }

  a {
    font-size: var(--fs-md);
    text-align: center;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.light};
    transition: color 0.3s linear;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.gold};
    }
  }
`;

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (scrollTo) => {
    setIsOpen(false);
    document.getElementById(scrollTo).scrollIntoView();
  };

  return (
    <StyledBurger>
      <StyledBurgerButton
        open={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <div></div>
        <div></div>
        <div></div>
      </StyledBurgerButton>
      <StyledBurgerMenu open={isOpen}>
        <a onClick={() => handleClick('aboutme')}>About me</a>
        <a onClick={() => handleClick('offer')}>Offer</a>
        <a onClick={() => handleClick('contact')}>Contact</a>
      </StyledBurgerMenu>
    </StyledBurger>
  );
};

export default BurgerMenu;
