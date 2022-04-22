import { React } from 'react';
import PlantsList from '../PlantList/index';
import plants from '../../mock/plants';

const Home = () => {
  return (
    <div className='relative'>
      <PlantsList plants={plants} />
    </div>
  );
};

export default Home;