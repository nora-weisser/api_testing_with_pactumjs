import pkg from 'pactum';
const { stash } = pkg;
import { faker } from '@faker-js/faker/locale/en';
import dotenv from 'dotenv';
dotenv.config();

export function registerAuthTemplates() {
  stash.addDataTemplate({
    ExistingUser: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
    },
    NonExistingUser: {
        username: faker.internet.username(),
        password: faker.internet.password(),
    }
});
}