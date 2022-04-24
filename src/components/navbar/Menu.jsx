import styled from 'styled-components';

const StyledMenu = styled.div`
  display: flex;
  width: 400px;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;

  @media (max-width: 576px) {
    display: none;
    flex-direction: column;
  }

  a {
    color: ${({ theme }) => theme.navy};

    padding: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    transition: color 0.3s linear;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.gold};
    }
  }
`;

const Menu = () => {
  const handleClick = (scrollTo) => {
    document.getElementById(scrollTo).scrollIntoView();
  };

  return (
    <StyledMenu>
      <a onClick={() => handleClick('aboutme')}>About me</a>
      <a onClick={() => handleClick('offer')}>Offer</a>
      <a onClick={() => handleClick('contact')}>Contact</a>
    </StyledMenu>
  );
};

export default Menu;
