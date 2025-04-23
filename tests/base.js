const { request, reporter } = require('pactum');
const addContext = require('mochawesome/addContext');
require('dotenv').config()

const awesome_reporter = {
  afterSpec(spec) {
    const ctx = spec.recorded['mocha'];
    if (ctx) {
      try {
        addContext(ctx, {
          title: 'Request',
          value: spec.request
        });
        addContext(ctx, {
          title: 'Response',
          value: spec.response
        });
      } catch (err) {
        console.error('[Custom Reporter] Failed to add context:', err.message);
      }
    } else {
      console.warn('[Custom Reporter] Mocha context not recorded');
    }
  }
};

before(() => {
  request.setBaseUrl(process.env.BASE_URL);
});

after(() => {
  reporter.add(awesome_reporter);
});


