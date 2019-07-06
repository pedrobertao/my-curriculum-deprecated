import I18n from 'i18n-js'

import en from './en.json'
import pt from './pt.json'

I18n.translations = { en, pt }

I18n.missingTranslation = (obj) => `Missing this translation ${obj}`
I18n.fallbacks = true
I18n.locale = window.localStorage.getItem('language') || 'en'

export default I18n