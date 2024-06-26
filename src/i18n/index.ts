import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'


const resources = {
  EN: {

  },
  FR: {
    
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "EN",

    interpolation: {
      escapeValue: false
    }
});

export default i18n;