import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/languageContext';

class App extends React.Component {

  state = {
    language : "english"
  }
  static contextType = LanguageContext;
  
  onLanguageChange = (language) => {
    this.setState({language});
  }

  render() {
    let name = this.context === 'english'? "Select a language:" : "Selecteer de taal:"
    return (
      <div className="ui container">
        <div>
          {name}
          <i className="flag us" onClick = {(() => this.onLanguageChange('english'))}/>
          <i className="flag nl" onClick = {(() => this.onLanguageChange('dutch'))} />
        </div>
        <LanguageContext.Provider value = {this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
