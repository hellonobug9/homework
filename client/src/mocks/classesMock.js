import faker from 'faker';

import mock from 'src/utils/mock';

mock.onGet('/classes').reply(200, {
  classes: [
    {
      id: faker.random.uuid(),
      teacherId: faker.random.uuid(),
      address: 'California',
      description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
      title: 'Languages'
    },
    {
      id: faker.random.uuid(),
      teacherId: faker.random.uuid(),
      address: 'Virgil',
      description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
      title: 'Math'
    },
    {
      id: faker.random.uuid(),
      teacherId: faker.random.uuid(),
      address: 'Virgil',
      description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
      title: 'Art'
    }
  ]
});
