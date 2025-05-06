import pkg from 'pactum';
const { spec, stash } = pkg;

import { faker } from '@faker-js/faker/locale/en';
import dotenv from 'dotenv';
import { authenticationSchema } from '../helpers/datafactory/schemas/authentication.schema.js';
dotenv.config();


/**
 * stash.addDataTemplate({
    ExistingUser: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
    },
    NonExistingUser: {
        username: faker.internet.username(),
        password: faker.internet.password(),
    }
});
 */


describe('/authenticate', () => {
    it('POST with existing username and valid password', async () => {
        await spec()
            .post('/auth/login')
            .inspect()
            .withJson({
                '@DATA:TEMPLATE@': 'ExistingUser'
            })
            .expectStatus(200)
            .expectJsonSchema(authenticationSchema)
    })

    it('POST with existing username and invalid password', async () => {
        await spec()
            .post('/auth/login')
            .inspect()
            .withJson({
                '@DATA:TEMPLATE@': 'ExistingUser',
                '@OVERRIDES@': {
                    'password': faker.internet.password()
                  }
            })
            .expectStatus(401)
            .expectJsonMatch('error', 'Invalid credentials')
    })

    it('POST with non-existing username and password', async () => {
        await spec()
            .post('/auth/login')
            .inspect()
            .withJson({
                '@DATA:TEMPLATE@': 'NonExistingUser'
            })
            .expectStatus(401)
            .expectJsonMatch('error', 'Invalid credentials')
    })
})
