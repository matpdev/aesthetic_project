import React from 'react';
import { Children } from 'react';
import Header from '../fragments/Header';

const Main = () => {
   return (
      <div className='Main'>
         <div className='main-ball'></div>
         <Header/>
      </div>
      
   );
};

export default Main;