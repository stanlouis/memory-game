import React from 'react';
import RobotsList from './components/RobotsList';


const App = () => {
  return (
    <div className="tc">
      <header className="tc pv4 pv3-ns">
        <h1 className="f1 f4-ns fw6 white">
          How Well Do You Remember Faces or Names
        </h1>
        <h2 className="f6 light-gray fw2 ttu tracked">The Memory Game</h2>
      </header>
        <RobotsList />
    </div>
  );
};

export default App;
