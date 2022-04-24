import styled from 'styled-components';
import Menu from './Menu';
import BurgerMenu from './BurgerMenu';

const StyledNav = styled.nav`
  width: min(100% - 2rem, 1080px);
  margin-inline: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: var(--fs-sm);
  padding-top: 1rem;

  img {
    width: 75px;
    height: 75px;
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <div className="logo">
        <img src="/src/assets/Logo.svg" alt="Logo" />
      </div>
      <div>
        <BurgerMenu />
        <Menu />
      </div>
    </StyledNav>
  );
};

export default Navbar;
