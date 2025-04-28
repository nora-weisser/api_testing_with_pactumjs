import pkg from 'pactum';
const { spec, stash } = pkg;

import { like } from 'pactum-matchers';
import { faker } from '@faker-js/faker/locale/en';
import dotenv from 'dotenv';
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
    it.only('POST with existing username and valid password', async () => {
        await spec()
            .post('/auth/login')
            .inspect()
            .withHeaders('Content-Type', 'application/json')
            .withJson({
                '@DATA:TEMPLATE@': 'ExistingUser'
            })
            .expectStatus(200)
            .expectJsonMatch({
                "token": like("some-token")
            })
    })

    it.only('POST with existing username and invalid password', async () => {
        await spec()
            .post('/auth/login')
            .inspect()
            .withHeaders('Content-Type', 'application/json')
            .withJson({
                '@DATA:TEMPLATE@': 'ExistingUser',
                '@OVERRIDES@': {
                    'password': faker.internet.password()
                  }
            })
            .expectStatus(401)
    })

    it('POST with non-existing username and password', async () => {
        await spec()
            .post('/auth/login')
            .inspect()
            .withHeaders('Content-Type', 'application/json')
            .withJson({
                '@DATA:TEMPLATE@': 'NonExistingUser'
            })
            .expectStatus(401)
    })
})
