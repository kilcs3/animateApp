import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const theme = {
  primary: '#004F8C',
  accent: '#29434e',
  secondary: '#6c757d',
  icon: '#064F8C',
  success: '#93BC3A',
  info: '#17a2b8',
  warning: '#ffc107',
  error: '#FF5252',
  white: '#FFFFFF',
  gray: '#6c757d',
  gray_dark: '#343a40',
  light: '#f8f9fa',
  dark: '#343a40',
  section: '#f4f4f4',
  gray_superdark: '#4E4E4E',
  gray_superlight: '#f4f4f4',
  gray_cookiebar: 'rgba(244,244,244,0.8)',
}

export default new Vuetify({
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
  icons: {
    iconfont: 'mdi',
  },
})
