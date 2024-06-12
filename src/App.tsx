import React from 'react';
import './App.css';
import QRCodeGenerator from './components/QRCodeGenerator';
import GitHubButton from './components/GitHubButton';

const App: React.FC = () => {
  return (
    <div className="App">
      <QRCodeGenerator />
      <GitHubButton />
    </div>
  );
};

export default App;
