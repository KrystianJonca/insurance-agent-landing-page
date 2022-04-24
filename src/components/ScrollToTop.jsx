import styled from 'styled-components';
import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const StyledButton = styled.div`
  position: fixed;
  width: 3rem;
  height: 3rem;
  right: 50px;
  bottom: 50px;

  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: ${({ theme }) => theme.navy};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.light};
  transition-duration: 0.2s;

  &:hover {
    transform: scale(1.08);
  }
`;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleBtn = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled <= 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      bahavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleBtn);

  return (
    <StyledButton
      onClick={scrollToTop}
      style={{ display: isVisible ? 'inline' : 'none' }}
    >
      <FaArrowCircleUp style={{ display: isVisible ? 'inline' : 'none' }} />
    </StyledButton>
  );
};

export default ScrollToTopButton;
