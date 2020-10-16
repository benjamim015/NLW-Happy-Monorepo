import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

import LogoImg from '../assets/logo.svg';

import { Container, ContentWrapper, Location } from '../styles/pages/Home';

const HomePage: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <LogoImg />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Pontes e Lacerda</strong>
          <span>Mato Grosso</span>
        </Location>

        <Link href="OrphanagesMap">
          <a>
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </a>
        </Link>
      </ContentWrapper>
    </Container>
  );
};

export default HomePage;
