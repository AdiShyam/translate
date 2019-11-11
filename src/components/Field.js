import React from 'react';
import LanguageContext from '../contexts/languageContext';

class Field extends React.Component {
    static contextType = LanguageContext;

    render() {
        const text = (this.context === 'english')? 'Name' : 'Naam';
        return (
            <div className=" ui field">
                <label>
                <LanguageContext.Consumer>
                    {(value) =>  {return (value === 'english')? 'Name' : 'Naam'}}
                </LanguageContext.Consumer>
                </label>
                <input />
            </div>

        )
    }
}

export default Field;