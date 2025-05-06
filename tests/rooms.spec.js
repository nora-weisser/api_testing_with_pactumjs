import pactum from 'pactum';
const { spec, stash } = pactum;

describe('GET All Rooms', () => {

    it('GET: All Rooms', async () => {

        await spec()
            .get('/room')
            .expectStatus(200)
    })
})

describe('POST Create a New Room', () => {

    beforeEach(async () => {
        await spec()
            .post('/auth/login')
            .withJson({
                '@DATA:TEMPLATE@': 'ExistingUser'
            }).stores('token', 'token')
    });


    it('POST: Create a New Room', async () => {
        await spec()
            .post('/room')
            .inspect()
            .withHeaders('Cookie', 'token=$S{token}')
            .withJson({ '@DATA:TEMPLATE@': 'RandomRoom' })
            .expectStatus(200)
            .expectJson({
                "success": true
            })

        const roomName = stash.getDataTemplate().RandomRoom.roomName;

        await spec()
            .get('/room')
            .inspect()
            .expectStatus(200)
            .stores('roomId', `rooms[roomName=${roomName}].roomid`);

        await spec()
            .get(`/room/$S{roomId}`)
            .inspect()
            .expectStatus(200)
            .expectJson('roomName', roomName);
    })

    afterEach(async () => {
        await spec()
            .delete('/room/$S{roomId}')
            .inspect()
            .withHeaders('Cookie', 'token=$S{token}')
    });

})
