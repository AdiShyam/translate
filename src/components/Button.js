import React from 'react';
import LanguageContext from '../contexts/languageContext';

class Button extends React.Component {
    static contextType = LanguageContext;

    render() {
        // const text = (this.context === 'english')? 'Submit' : 'Voorleggen';
        // console.log("the context isssssssssssssssssssss",this.context)
        // const value = this.context.language
        const buttonText = (this.context.language === 'english') ? 'Submit' : 'Voorleggen';
        return (
            <button className = 'ui button primary' >
                {/* <LanguageContext.Consumer>
                    {(value) => (value === 'english')? 'Submit' : 'Voorleggen'}
                </LanguageContext.Consumer> */}
                {buttonText}
            </button>
        )
    }
}

export default Button