import { createRulesPlugin } from 'vuetify/labs/rules'
import router from '../router'
import pinia from '../stores'
import vuetify from './vuetify'

import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(createRulesPlugin( { aliases:{} }, vuetify.locale))
}
