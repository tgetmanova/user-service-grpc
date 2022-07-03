import faker from '@faker-js/faker';
import { UserClient } from '../src/client/UserClient';
import { UserModel } from '../src/data/UserModel';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 25000;

const userClient = new UserClient();

describe('Users service tests', () => {

  it('Newly created user should be seen in user list', async () => {
    const expectedUser: UserModel = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    }

    const createdUser = await userClient.createUser(expectedUser);

    const users = await userClient.getUsers();

    const actualUser = users.usersList.find(u => u.id === createdUser.id);
    expect(actualUser).withContext('Newly created user cannot be found in user list retrieved by its identifier').not.toBeUndefined();
    expect(actualUser?.firstname).withContext('First name is not as expected').toEqual(expectedUser.firstName);
    expect(actualUser?.lastname).withContext('Last name is not as expected').toEqual(expectedUser.lastName);
  });

  it('Listening to expected number of messages should collect specified count of messages from server stream', async () => {
    const expectedMessagesCount = 15;

    const messages = await userClient.listenToUserMessages(expectedMessagesCount);

    expect(messages.length).withContext("Unexpected number of messages received").toEqual(expectedMessagesCount);
  });

});