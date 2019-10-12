  
import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import SearchForm from "./components/SearchForm.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import Navigation from "./components/Navigation.js";

const HeaderStyle = styled.div`

`

export default function App() {
  return (
    <HeaderStyle>
    <Header />
    <Navigation />
      <Route exact path="/" component={WelcomePage}/> 
      <Route path="/CharacterList" component={CharacterList}/> 
      <Route path="/SearchForm" component={SearchForm}/>  
    </HeaderStyle>
  );
}