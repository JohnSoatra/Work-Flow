import React from 'react';

import profile from './img/profile.jpg';
const fbLink = "https://www.facebook.com/pheareak.nhor";

const App = () => {
  return (
    <div className="App">
      <h3>សួរស្ដី​ខ្ញុំបាទឈ្មោះ​ : <mark><b>Pheareak Nhor</b></mark></h3>
      <h3>ចំពោះ​ខ្ញុំនៅ : <mark>Single</mark></h3>
      <h3>សិក្សា​នៅ ​​: RUPP</h3>
      <div className="Profile">
        <div><h4>ចង់ញែ​​អាច<mark><b>Click</b></mark>លើLink​​​ រី លើរូបភាពខាងក្រោមបាន!! &#128513;</h4></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div><a href={fbLink} target="_blank"><img src={profile} alt="profile" /></a></div>
      </div>
      <a href={ fbLink } target="_blank"><small><mark>Pheareak Nhor</mark></small></a>
      <h3>SEE YOU SOON!!!!</h3>
    </div>
  );
}

export default App;
