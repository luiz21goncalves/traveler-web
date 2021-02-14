import React, { useContext } from 'react';
import {
  FiCamera,
  FiCoffee,
  FiCalendar,
  FiAlertCircle,
  FiArrowLeft,
} from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { ThemeContext } from 'styled-components';

import image1 from '../../assets/Foto (1).png';
import image2 from '../../assets/Foto (2).png';
import image3 from '../../assets/Foto (3).png';
import image4 from '../../assets/Foto (4).png';
import image from '../../assets/Foto.png';
import highlightImage from '../../assets/highlight.png';
import Header from '../../components/Header';
import PlaceCard from '../../components/PlaceCard';
import Point from '../../components/Point';

import {
  Container,
  HaederContent,
  Banner,
  Details,
  PointsContainer,
  TopRated,
  Highlight,
  BestPlaces,
  CardsContainer,
} from './styles';

const CityDetail: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const { goBack } = useHistory();

  return (
    <Container>
      <Header>
        <HaederContent>
          <button type="button" onClick={() => goBack()}>
            <FiArrowLeft size={20} color={colors.complements} />
          </button>
          <span>Cidade</span>
          <div />
        </HaederContent>
      </Header>

      <Banner src={image} alt="Nome da Cidade" />

      <main>
        <section>
          <Details>
            <h1>Florianópoles</h1>
            <p>
              Capital do estado de Santa Catarina no sul do Brasil, é
              maioritariamente constituída pela Ilha de Santa Catarina, com 54
              km de comprimento.
            </p>
            <span>
              É famosa pelas suas praias, incluindo estâncias turísticas
              populares como a Praia dos Ingleses na extremidade norte da ilha.
            </span>
          </Details>

          <PointsContainer>
            <Point icon={FiCamera} text="Pontos Turísticos" score={67} />
            <Point icon={FiCoffee} text="Comida e Bebida" score={20} />
            <Point icon={FiCalendar} text="Eventos Organizados" score={11} />
          </PointsContainer>
        </section>

        <TopRated>
          <h2>Top avaliados</h2>

          <div>
            <PlaceCard
              image={image1}
              alt=""
              stars="4,7"
              title="Praia do Campache"
              text="Pontos turísticos"
              icon={FiCamera}
            />

            <PlaceCard
              image={image2}
              alt=""
              stars="5,0"
              title="Expo Tattoo Floripa"
              text="Eventos Organizados"
              icon={FiCalendar}
            />

            <PlaceCard
              image={image3}
              alt=""
              stars="4,9"
              title="Doce & Companhai"
              text="Comida e Bebida"
              icon={FiCoffee}
            />

            <PlaceCard
              image={image4}
              alt=""
              stars="5,0"
              title="Lagoa da Conceição"
              text="Pontos Turistícos"
              icon={FiCamera}
            />
          </div>
        </TopRated>

        <Highlight>
          <div>
            <div>
              <FiAlertCircle size={20} color={colors.shapeLight} />
              <span>Destaque</span>
            </div>

            <h3>Praia dos Ingleses</h3>

            <p>
              Uma parte do paraíso na terra. Frequentemente com águas claras em
              tons verdes e azuis. Um dos locais mais preferidos por turistas e
              viajantes.
            </p>
          </div>

          <img src={highlightImage} alt="praia" />
        </Highlight>

        <BestPlaces>
          <div className="heading">
            <h3>Conheça Todos</h3>
            <nav>
              <button type="button">Todos</button>
              <button type="button">Pontos Turistícos</button>
              <button type="button">Comida & Bebida</button>
              <button type="button">Eventos Organizados</button>
            </nav>
          </div>

          <CardsContainer>
            <PlaceCard
              image={image1}
              alt=""
              stars="4,7"
              title="Praia do Campache"
              text="Pontos turísticos"
              icon={FiCamera}
            />

            <PlaceCard
              image={image2}
              alt=""
              stars="5,0"
              title="Expo Tattoo Floripa"
              text="Eventos Organizados"
              icon={FiCalendar}
            />

            <PlaceCard
              image={image3}
              alt=""
              stars="4,9"
              title="Doce & Companhai"
              text="Comida e Bebida"
              icon={FiCoffee}
            />

            <PlaceCard
              image={image4}
              alt=""
              stars="5,0"
              title="Lagoa da Conceição"
              text="Pontos Turistícos"
              icon={FiCamera}
            />
            <PlaceCard
              image={image1}
              alt=""
              stars="4,7"
              title="Praia do Campache"
              text="Pontos turísticos"
              icon={FiCamera}
            />

            <PlaceCard
              image={image2}
              alt=""
              stars="5,0"
              title="Expo Tattoo Floripa"
              text="Eventos Organizados"
              icon={FiCalendar}
            />

            <PlaceCard
              image={image3}
              alt=""
              stars="4,9"
              title="Doce & Companhai"
              text="Comida e Bebida"
              icon={FiCoffee}
            />

            <PlaceCard
              image={image4}
              alt=""
              stars="5,0"
              title="Lagoa da Conceição"
              text="Pontos Turistícos"
              icon={FiCamera}
            />
          </CardsContainer>
        </BestPlaces>
      </main>
    </Container>
  );
};

export default CityDetail;
