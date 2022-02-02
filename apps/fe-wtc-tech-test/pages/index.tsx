import React from 'react';
import FilterMenu from '../app/components/filterMenu';
import Movies from '../app/components/Movies';
// import FilterItem from '../app/components/filterItem';

const Home = () => {
  let map: { [key: string]: boolean } = {};
  map['foo'] = true;
  map['bar'] = false;

  return (
    <main>
      <Movies />
      {/* <FilterMenu data={[]} onChange={() => {}} /> */}
      {/* <FilterItem data={[]} checkedList={map} onChasnge={() => {}} /> */}
    </main>
  );
};

export default Home;
