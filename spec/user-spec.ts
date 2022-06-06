import faker from '@faker-js/faker';
import { UserClient } from '../src/client/UserClient';
import { UserModel } from '../src/data/UserModel';

const userClient = new UserClient();

describe('Users service tests', () => {

  it('Newly created user should be seen in user list', async () => {
    let expectedUser: UserModel = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    }

    let createdUser = await userClient.createUser(expectedUser);

    let users = await userClient.getUsers();

    let actualUser = users.usersList.find(u => u.id == createdUser.id);
    expect(actualUser).withContext('Newly created user cannot be found in user list retrieved by its identifier').not.toBeUndefined();
    expect(actualUser?.firstname).withContext('First name is not as expected').toEqual(expectedUser.firstName);
    expect(actualUser?.lastname).withContext('Last name is not as expected').toEqual(expectedUser.lastName);
  });

});