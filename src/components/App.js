import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/languageContext';
import LanguageSelector from './languageSelector';
import  './App.css';

class App extends React.Component {

  // static contextType = LanguageContext;
  
  render() {
    // let name = this.context === 'english'? "Select a language:" : "Selecteer de taal:"
    return (
      <div className="ui container line-wrapper">
        <LanguageStore>
          <LanguageSelector />
            <UserCreate />
        </LanguageStore>
      </div>
    );
  }
}

export default App;
