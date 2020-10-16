import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { FiPlus } from 'react-icons/fi';

import MapMarkerImg from '../assets/map-marker.svg';

import { Container } from '../styles/pages/OrphanagesMap';

const Map = dynamic(() => import('../components/Map'), {
  ssr: false,
});

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <aside>
        <header>
          <MapMarkerImg />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Pontes e Lacerda</strong>
          <span>Mato Grosso</span>
        </footer>
      </aside>

      <Map />

      <Link href="/">
        <a>
          <FiPlus />
        </a>
      </Link>
    </Container>
  );
};

export default OrphanagesMap;
