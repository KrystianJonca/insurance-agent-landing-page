import styled from 'styled-components';
import Navbar from './navbar/Navbar';
import headerImg from '../assets/HeaderImage.webp';
const StyledHeader = styled.header`
  width: min(100% - 2rem, 1080px);
  margin-inline: auto;

  .header-content {
    margin: 4rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    p {
    }

    p {
      font-size: var(--fs-md);
      font-weight: 300;
    }

    h1 {
      font-weight: 400;
      font-size: var(--fs-xl);
      margin-top: 10px;
      margin-bottom: 10px;
    }

    button {
      font-family: 'Open Sans';
      padding: 10px 20px;
      font-size: var(--fs-md);
      letter-spacing: 3px;
      border: none;
      border-radius: 2px;
      transition-duration: 0.4s;

      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      background: ${({ theme }) => theme.navy};
      color: ${({ theme }) => theme.light};
      border: 2px solid ${({ theme }) => theme.navy};

      &:hover {
        background: ${({ theme }) => theme.light};
        color: ${({ theme }) => theme.navy};
      }
    }

    @media (max-width: 1050px) {
      flex-direction: column;
      justify-content: space-evenly;
    }
  }

  .header-image {
    @media (max-width: 1050px) {
      margin: 6rem 0;
    }

    img {
      max-width: 500px;
      max-height: 500px;

      @media (max-width: 600px) {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const Header = () => {
  const handleClick = () => {
    document.getElementById('contact').scrollIntoView();
  };

  return (
    <StyledHeader>
      <Navbar />
      <div className="header-content">
        <div>
          <p>Your personal insurence agent</p>
          <h1>Insurence suited for everybody</h1>
          <button onClick={handleClick}>Get In Touch</button>
        </div>
        <div className="header-image">
          <img src={headerImg} alt="Family under an umbrella" />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
