import React, { useContext } from 'react';
import { FiSearch, FiChevronDown } from 'react-icons/fi';

import { ThemeContext } from 'styled-components';

import image1 from '../../assets/image-1.png';
import image2 from '../../assets/image-2.png';
import image3 from '../../assets/image-3.png';
import image4 from '../../assets/image-4.png';
import image5 from '../../assets/image-5.png';
import image6 from '../../assets/image-6.png';
import image7 from '../../assets/image-7.png';
import image8 from '../../assets/image-8.png';
import Card from '../../components/Card';
import Header from '../../components/Header';

import { Container, HeaderContent, Heading } from './styles';

const ListCities: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <FiSearch size={20} color={colors.complements} />
          <input type="text" placeholder="Qual cidade você procura?" />
        </HeaderContent>
      </Header>

      <main>
        <Heading>
          <h1>Selecione uma cidade</h1>

          <div>
            <button type="button">Todos</button>
            <button type="button">Mais acessadas</button>
            <button type="button">
              A - Z
              <FiChevronDown size={10} color={colors.orange} />
            </button>
          </div>
        </Heading>

        <section>
          <Card image={image1} city="Águas Mornas" numberPlaces={13} />
          <Card image={image2} city="Bombinhas" numberPlaces={43} />
          <Card image={image3} city="Blumenau" numberPlaces={29} />
          <Card image={image4} city="Florianópolis" numberPlaces={98} />
          <Card image={image5} city="Imbituba" numberPlaces={61} />
          <Card image={image6} city="Jaraguá do Sul" numberPlaces={41} />
          <Card image={image7} city="Lages" numberPlaces={19} />
          <Card image={image8} city="Rio do Sul" numberPlaces={27} />
          <Card image={image1} city="Águas Mornas" numberPlaces={13} />
          <Card image={image2} city="Bombinhas" numberPlaces={43} />
          <Card image={image3} city="Blumenau" numberPlaces={29} />
          <Card image={image4} city="Florianópolis" numberPlaces={98} />
          <Card image={image5} city="Imbituba" numberPlaces={61} />
          <Card image={image6} city="Jaraguá do Sul" numberPlaces={41} />
          <Card image={image7} city="Lages" numberPlaces={19} />
          <Card image={image8} city="Rio do Sul" numberPlaces={27} />
        </section>
      </main>
    </Container>
  );
};

export default ListCities;
