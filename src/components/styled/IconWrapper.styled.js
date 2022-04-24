import styled from 'styled-components';

const IconWrapper = styled.div`
  margin: 2rem;
  margin-bottom: 4rem;
  font-weight: 300;
  font-size: var(--fs-md);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem 1.5rem;

  max-width: 260px;
  background: #ffffff;
  box-shadow: rgba(41, 27, 37, 0.2) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.1) 0px 30px 60px -30px;
  border-radius: 36px;

  transition: 0.3s;

  &:hover {
    transform: translate(0, -10px);
  }
`;

export default IconWrapper;
