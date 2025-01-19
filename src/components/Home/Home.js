import React from 'react';
import Carrousel1 from '../Carrousel1/Carrousel1';
import Pasos from '../Paso/Paso';
import Card from '../Card/Card';
import Homeproducts from '../Homeproducts/Homeproducts';

function Home() {
  return (
    <div>
      <Carrousel1 />
      <Pasos />
      <Homeproducts/>
      <Card start={0} end={10} showFilters={false}/>
    </div>
  );
}

export default Home;
