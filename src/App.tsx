import React from 'react';
import GlobalStyles from "./GlobalStyles";
import Home from './components/pages/Home';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
