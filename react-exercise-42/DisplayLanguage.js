import React from "react";
import { LanguageContext } from "./LanguageContext";

export function DisplayLanguage() {
    return (
        <LanguageContext.Consumer>
            { (language) => (
                <div>Current Language: <h1>{language}</h1></div>
            )}
        </LanguageContext.Consumer>
    )

}