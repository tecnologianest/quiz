import i18n from "i18next";
import {initReactI18next} from "react-i18next"
import locales from "./index";

const resources = locales;
i18n
    .use(initReactI18next)
    .init(
        {
            resources,
            debug: false,
            lng: navigator.language,
            interpolation: {
                escapeValue: false
            },
            defaultNS: "translations",
            fallbackLng: 'pt-BR',
            ns: ['translations'],

        }
    )

export {i18n}