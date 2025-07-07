import pactum from 'pactum';
import dotenv from 'dotenv';
dotenv.config();
import { registerAllDataTemplates } from '../helpers/datafactory/templates/registerDataTemplates.js';

const { request } = pactum;

before(() => {
  request.setBaseUrl(process.env.BASE_URL);
  registerAllDataTemplates()
});
