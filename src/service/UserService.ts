import faker from '@faker-js/faker';
import { Status } from '@grpc/grpc-js/build/src/constants';
import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js/build/src/server-call';
import { ServerWritableStream } from 'grpc';
import { CreateUserRequest, GetUserRequest, UserListResponse, UserResponse, UserMessage, UserMessagesRequest } from "../grpc-ts-types/proto/users_pb";
import { UserDataManager } from "../UserDataManager";

export class UserService {

    getUser(call: ServerUnaryCall<GetUserRequest, UserResponse>, callback: sendUnaryData<UserResponse>) {

        const user = UserDataManager.Users.find(u => u.id == call.request.getId());

        if (!user) {
            callback({ code: Status.NOT_FOUND, details: `User with Id=${call.request.getId()} is not found` }, null);
        }
        const userResponse = new UserResponse()
            .setId(user?.id!)
            .setFirstname(user?.firstName!)
            .setLastname(user?.lastName!);
        callback(null, userResponse);
    }

    getUsers(call: ServerUnaryCall<void, UserListResponse>, callback: sendUnaryData<UserListResponse>) {
        const usersResponse = new UserListResponse();
        usersResponse.setUsersList(UserDataManager.Users.map(u => {
            let user = new UserResponse()
                .setFirstname(u.firstName)
                .setLastname(u.lastName)
                .setId(u.id!);
            return user;
        }));
        callback(null, usersResponse);
    }

    createNewUser(call: ServerUnaryCall<CreateUserRequest, UserResponse>, callback: sendUnaryData<UserResponse>) {
        const userModel = UserDataManager.addUser(call.request.getFirstname(), call.request.getLastname());

        const userResponse = new UserResponse()
            .setId(userModel.id!)
            .setFirstname(userModel.firstName)
            .setLastname(userModel.lastName);
        callback(null, userResponse);
    }

    async listenToUserMessages(call: ServerWritableStream<UserMessagesRequest, UserMessage>) {
        for (let i = 0; i < call.request.getMessagescount(); i++) {
            let message = new UserMessage()
                .setText(faker.lorem.sentences())
                .setUserid(UserDataManager.Users[0].id!);
            call.write(message);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        call.end();
    }
}