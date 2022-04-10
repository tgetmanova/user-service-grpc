import * as grpc from '@grpc/grpc-js'
import { ContactService } from './service/ContactService';
import { UserService } from './service/UserService';
import { ContactServiceService } from './src/grpc-ts-types/proto/contacts_grpc_pb';
import { UserServiceService } from './src/grpc-ts-types/proto/users_grpc_pb';

const userService = new UserService();
const contactService = new ContactService();

function main() {
  var server = new grpc.Server();
  server.addService(UserServiceService,
    {
      getUser: userService.getUser,
      getUsers: userService.getUsers,
      createUser: userService.createNewUser
    });
  server.addService(ContactServiceService,
    {
      getUserContacts: contactService.getUserContacts
    });
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
  });
  console.log("Running");
}

main();