import pactum from 'pactum';
import dotenv from 'dotenv';
import { registerAllDataTemplates } from '../helpers/datafactory/templates/registerDataTemplates.js'
dotenv.config();

const { request } = pactum;

before(() => {
  request.setBaseUrl(process.env.BASE_URL);
  request.setDefaultHeaders('Content-Type', 'application/json');
  registerAllDataTemplates(); 
});


