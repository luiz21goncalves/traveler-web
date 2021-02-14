import React from 'react';

import image1 from '../../assets/image-1.png';
import image2 from '../../assets/image-2.png';
import image3 from '../../assets/image-3.png';
import image4 from '../../assets/image-4.png';
import logo from '../../assets/logo.png';
import Card from '../../components/Card';

import { Container, Header, TextContainer, Section } from './styles';

const Home: React.FC = () => (
  <Container>
    <Header>
      <img src={logo} alt="Traveler" />
      <button type="button">Acesso restrito</button>
    </Header>

    <main>
      <TextContainer>
        <h1>Viva uma grande aventura</h1>
        <p>
          Descubra locais incríveis para se visitar em cidades maravilhosas de
          Santa Catarina.
        </p>
        <button type="button">Descobrir todos os lugares</button>
      </TextContainer>

      <Section>
        <div>
          <Card image={image1} city="Florianópolis" numberPlaces={98} isHome />
          <Card image={image2} city="Blumenau" numberPlaces={29} isHome />
          <Card image={image1} city="Florianópolis" numberPlaces={98} isHome />
        </div>

        <div>
          <Card image={image3} city="Bombinas" numberPlaces={43} isHome />
          <Card image={image4} city="Águas Mornas" numberPlaces={13} isHome />
          <Card image={image3} city="Bombinas" numberPlaces={43} isHome />
        </div>
      </Section>
    </main>
  </Container>
);

export default Home;
