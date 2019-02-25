import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import authenticate from './components/authentication/authenticate';
import Login from './components/Login/Login';
const AuthenticateContent = authenticate(Content, Login)

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <AuthenticateContent />
    </div>
  );
}

export default App;
