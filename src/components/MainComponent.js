import React from 'react';
import Section1Component from './main/Section1Component.js';
import Section2Component from './main/Section2Component.js';

const MainComponent = ({modalOpen}) => {
   return (
      <main id="main">
      <Section1Component/>
      <Section2Component modalOpen={modalOpen}/>
    </main>
   );
};

export default MainComponent;