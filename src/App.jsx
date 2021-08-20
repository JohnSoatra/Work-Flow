import React from 'react';
import profile from './img/profile.jpg';

const App = () => {
  return (
    <div className="App">
      <h1>សូមស្វាគមន៍មកកាន់គេហទំព័រ Soatra</h1>
      <p>គេហទំព័រនេះគឺកំពុងអភិវឌ្ឍន៍​...</p>
      <div>
        <div><h3>នឹងជួបគ្នាឆាប់ៗនេះជាមួយ អាត្រា</h3></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div><img src={profile} alt="profile" /></div>
      </div>
    </div>
  );
}

export default App;
