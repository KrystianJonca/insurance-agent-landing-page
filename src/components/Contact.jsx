import styled from 'styled-components';

const StyledContactSection = styled.section`
  width: min(100% - 2rem, 1080px);
  margin-inline: auto;
  margin-bottom: 2rem;
  text-align: center;

  h2 {
    padding: 2rem 0;
    font-weight: 400;
    font-size: var(--fs-xl);
    margin: 2rem 0;
  }
`;

const ContactSection = () => {
  return (
    <StyledContactSection>
      <h2>Contact</h2>
    </StyledContactSection>
  );
};

export default ContactSection;
