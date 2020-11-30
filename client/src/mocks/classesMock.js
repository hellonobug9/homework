import faker from 'faker';

import mock from 'src/utils/mock';

mock.onGet('/classes').reply(200, {
  classes: [
    {
      id: faker.random.uuid(),
      teacherId: faker.random.uuid(),
      address: 'California',
      description: 'Improve english skills'
    },
    {
      id: faker.random.uuid(),
      teacherId: faker.random.uuid(),
      address: 'Virgil',
      description: 'Improve espanol skills'
    }
  ]
});
