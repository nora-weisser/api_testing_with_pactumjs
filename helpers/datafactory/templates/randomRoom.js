import pkg from 'pactum';
const { stash } = pkg;
import { faker } from '@faker-js/faker/locale/en';

const roomType = ["Single", "Double", "Twin", "Family", "Suite"];
const features = ['WiFi', 'Refreshment', 'TV', 'Safe', 'Radio', 'Views'];

export function registerRoomTemplates() {
  stash.addDataTemplate({
    RandomRoom: {
        roomName: faker.word.adjective() + '-' + faker.number.int({ min: 100, max: 999 }),
        type: faker.helpers.arrayElement(roomType),
        description: faker.lorem.sentence(),
        accessible: faker.datatype.boolean(),
        image: faker.image.urlPicsumPhotos(),
        features: faker.helpers.arrayElements(features, {min: 1, max: 6}),
        roomPrice: faker.commerce.price({min: 100, max: 500, dec: 0})
  }});
}
