import styled from 'styled-components';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Menu from './navbar/Menu';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.navy};
  color: ${({ theme }) => theme.light};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;

  h3 {
    font-weight: 400;
    font-size: var(--fs-md);
    letter-spacing: 2px;
    padding: 1rem;
  }

  a {
    color: ${({ theme }) => theme.light};
    cursor: pointer;
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.gold};
    }
  }

  .footer-icon {
    transition-duration: 0.2s;
    margin: 1rem;

    &:hover {
      transform: scale(1.08);
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        <h3>Menu</h3>
        <Menu footer={true} />
        <FaFacebook size={32} className="footer-icon" />
        <FaInstagram size={32} className="footer-icon" />
        <p>
          Created & Designed by{' '}
          <a href="https://github.com/KrystianJonca">Krystian</a>
        </p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
