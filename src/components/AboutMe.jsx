import styled from 'styled-components';
import Picture from '../assets/AboutMePicture.webp';
import decor from '../assets/Decor.webp';

const StyledAboutMe = styled.section`
  width: min(100% - 2rem, 1080px);
  margin-inline: auto;

  background-image: url(${decor});
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 200px 200px;

  @media (max-width: 550px) {
    background-size: 100px 100px;
  }

  .aboutme-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1050px) {
      flex-direction: column;
    }
  }

  .aboutme-container_content {
    max-width: 760px;
    padding: 1rem;
    p {
      font-size: var(--fs-md);
      font-weight: 300;
      text-align: justify;
      text-justify: inter-word;
    }

    h2 {
      padding: 2rem 0;
      font-weight: 400;
      font-size: var(--fs-xl);
      margin-top: 10px;
    }
  }
  .aboutme-container_image {
    margin: 2rem;

    img {
      border-radius: 50%;
      box-shadow: rgba(41, 27, 37, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

      @media (max-width: 600px) {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const AboutMe = () => {
  return (
    <StyledAboutMe id="about">
      <div className="aboutme-container">
        <div className="aboutme-container_image">
          <img src={Picture} alt="Women's picture" />
        </div>
        <div className="aboutme-container_content">
          <h2>About me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            ipsa, possimus laborum veniam et cupiditate unde adipisci itaque
            enim impedit harum, maiores excepturi nobis consequatur quisquam
            minus, atque nisi officia? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ullam fuga voluptatibus rem. Corrupti consequuntur
            hic repudiandae necessitatibus et sequi cupiditate fuga culpa.
          </p>
        </div>
      </div>
    </StyledAboutMe>
  );
};

export default AboutMe;
