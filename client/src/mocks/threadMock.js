import faker from 'faker';

import mock from 'src/utils/mock';

mock.onGet('/threads').reply(200, {
  threads: [
    {
      id: '1',
      teacherId: '1',
      address: 'California',
      description:
        'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
      title: 'General'
    },
    {
      id: '2',
      teacherId: '1',
      address: 'Virgil',
      description:
        'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
      title: 'Accountant'
    },
    {
      id: '3',
      teacherId: '1',
      address: 'Virgil',
      description:
        'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
      title: 'Human Resource'
    }
  ]
});

mock.onGet('/threads/1').reply(200, {
  thread: {
    id: '1',
    teacherId: '1',
    address: 'California',
    description:
      'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    title: 'General'
  }
});
