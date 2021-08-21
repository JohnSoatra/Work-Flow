import React from 'react';

import profile from './img/profile.jpg';
const fbLink = "https://www.facebook.com/Soatra";
const name = "អាត្រា";
const year = "៤";
const major = "ពត័មានវិទ្យា";
const university = "RUPP";

const App = () => {
  return (
    <div className="App">
      <h3>សួរស្ដីខ្ញុំបាតមានឈ្មោះថា {name}</h3>
      <h3>ខ្ញុំបាតជានិស្សិតឆ្នាំទី{year} ផ្នែក{major} នៅសាកលវិទ្យាល័យ {university} ​។</h3>
      <div className="Profile">
        <div><h4>នេះគឺជាប្រូហ្វាល់របស់ខ្ញុំ...</h4></div>
        <div><h4>តើសង្ហាទេបាត... &#128513;</h4></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div><a href={fbLink} target="_blank"><img src={profile} alt="profile" /></a></div>
      </div>
      <h5>សូមចុចលើរូបភាព ដើម្បីទៅកាន់គណនី facebook របស់ខ្ញុំបាត &#128578;</h5>
    </div>
  );
}

export default App;
