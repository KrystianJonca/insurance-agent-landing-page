import styled from 'styled-components';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Map from './map/Map';

const StyledContactSection = styled.section`
  width: min(100% - 2rem, 1080px);
  margin-inline: auto;
  margin-bottom: 6rem;
  text-align: center;

  .contact-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 850px) {
      flex-direction: column;
    }
  }

  .contact-container_content {
    padding: 1rem;

    @media (max-width: 850px) {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
      flex-wrap: wrap;
    }
  }

  h2 {
    font-weight: 400;
    font-size: var(--fs-xl);
    padding: 1rem;
  }

  p {
    margin-bottom: 4rem;
    font-size: var(--fs-md);
    font-weight: 300;
    text-align: center;
  }

  .contact-info {
    padding: 1rem;
  }

  .contact-icon {
    font-size: 36px;
    margin: 0.5rem;
  }

  .contact-info_text {
    margin-bottom: 0;
    font-size: var(--fs-sm);
  }

  .contact-container_map {
    width: 100%;
    height: 513px;
  }
`;

const ContactSection = () => {
  return (
    <StyledContactSection id="contact">
      <h2>Contact</h2>
      <p>
        If you are interested in my services, please feel free to get in touch
        with me.
      </p>
      <div className="contact-container">
        <div className="contact-container_map">
          <Map />
        </div>
        <div className="contact-container_content">
          <div className="contact-info">
            <FaUser className="contact-icon" />
            <p className="contact-info_text">Your Name</p>
          </div>
          <div className="contact-info">
            <FaMapMarkerAlt className="contact-icon" />
            <p className="contact-info_text">Street 81, 00-001 Warsaw</p>
          </div>
          <div className="contact-info">
            <FaPhoneAlt className="contact-icon" />
            <p className="contact-info_text">123 456 789</p>
          </div>
          <div className="contact-info">
            <FaEnvelope className="contact-icon" />
            <p className="contact-info_text">youremail@gmail.com</p>
          </div>
        </div>
      </div>
    </StyledContactSection>
  );
};

export default ContactSection;
