import Vue from 'vue'

import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from '@sentry/integrations';
Sentry.init({
  release: 'sentry-test@1.0.0',
  dsn: 'https://7002f42b80924241a9e2e89f279d4064@o382792.ingest.sentry.io/5212189',
  integrations: [new VueIntegration({Vue, attachProps: true})]
});

const catchKeys = ['errorHandler', 'warnHandler', 'renderError', 'errorCaptured']
catchKeys.forEach(key => {
  Vue.config[key] = (err) => {
    console.log(key, err)
    if (err) {
      Sentry.captureException(err)
    }
  }
})

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
