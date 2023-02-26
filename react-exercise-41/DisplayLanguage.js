import React from "react";
import { LanguageContext } from "./LanguageContext";

export function DisplayLanguage() {
    return (
        <LanguageContext.Consumer>
            { (language) => (
                <h3>Current Language: {language}</h3>
            )}
        </LanguageContext.Consumer>
    )

}