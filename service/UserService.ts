import { Status } from '@grpc/grpc-js/build/src/constants';
import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js/build/src/server-call';
import { CreateUserRequest, GetUserRequest, UserListResponse, UserResponse } from "../src/grpc-ts-types/proto/users_pb";
import { UserDataManager } from "./UserDataManager";

export class UserService {

    getUser(call: ServerUnaryCall<GetUserRequest, UserResponse>, callback: sendUnaryData<UserResponse>) {

        const user = UserDataManager.Users.find(u => u.id == call.request.getId());

        if (!user) {
            callback({ code: Status.NOT_FOUND, details: `User with Id=${call.request.getId()} is not found` }, null);
        }
        const userResponse = new UserResponse();
        userResponse.setId(user?.id!);
        userResponse.setFirstname(user?.firstName!);
        userResponse.setLastname(user?.lastName!);
        callback(null, userResponse);
    }

    getUsers(call: ServerUnaryCall<void, UserListResponse>, callback: sendUnaryData<UserListResponse>) {
        const usersResponse = new UserListResponse();
        usersResponse.setUsersList(UserDataManager.Users.map(u => {
            let user = new UserResponse();
            user.setFirstname(u.firstName);
            user.setLastname(u.lastName);
            user.setId(u.id);
            return user;
        }));
        callback(null, usersResponse);
    }

    createNewUser(call: ServerUnaryCall<CreateUserRequest, UserResponse>, callback: sendUnaryData<UserResponse>) {
        const userModel = UserDataManager.addUser(call.request.getFirstname(), call.request.getLastname());
        
        const userResponse = new UserResponse();
        userResponse.setId(userModel.id);
        userResponse.setFirstname(userModel.firstName);
        userResponse.setLastname(userModel.lastName);
        callback(null, userResponse);
    }
}