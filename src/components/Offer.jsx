import styled from 'styled-components';
import IconWrapper from './styled/IconWrapper.styled';

import CarIcon from '../assets/Icons/Car.webp';
import HeartIcon from '../assets/Icons/Heart.webp';
import FamilyIcon from '../assets/Icons/Family.webp';
import HouseIcon from '../assets/Icons/House.webp';

const StyledOfferSection = styled.section`
  width: min(100% - 2rem, 1080px);
  margin-inline: auto;
  margin-bottom: 2rem;
  text-align: center;

  .offer-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    h2 {
      padding: 2rem 0;
      font-weight: 400;
      font-size: var(--fs-xl);
      margin: 2rem 0;
    }

    img {
      max-width: 150px;
      display: block;
      margin: auto;
      padding: 1rem;
    }

    .offer-icons {
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
      flex-wrap: wrap;
    }
  }
`;

const OfferSection = () => {
  return (
    <StyledOfferSection id="offer">
      <div className="offer-container">
        <h2>I insure</h2>
        <div className="offer-icons">
          <IconWrapper>
            <img loading="lazy" src={HouseIcon} alt="House" />
            <p>Property</p>
          </IconWrapper>
          <IconWrapper>
            <img loading="lazy" src={CarIcon} alt="Car" />
            <p>Cars</p>
          </IconWrapper>
          <IconWrapper>
            <img loading="lazy" src={FamilyIcon} alt="Family Image" />
            <p>Life & Health</p>
          </IconWrapper>
          <IconWrapper>
            <img loading="lazy" src={HeartIcon} alt="Health" />
            <p>Family</p>
          </IconWrapper>
        </div>
      </div>
    </StyledOfferSection>
  );
};

export default OfferSection;
