import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.navy};
  color: ${({ theme }) => theme.light};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

const Footer = () => {
  return <StyledFooter id="footer"></StyledFooter>;
};

export default Footer;
