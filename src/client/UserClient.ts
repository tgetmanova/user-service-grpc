import { UserServiceClient } from '../../src/grpc-ts-types/proto/users_grpc_pb'
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import grpc from 'grpc'
import { CreateUserRequest, UserListResponse, UserMessage, UserMessagesRequest, UserResponse } from '../../src/grpc-ts-types/proto/users_pb';
import { UserModel } from '../data/UserModel';
import { ServiceUrl } from '../Resources';

export class UserClient {

    private client: UserServiceClient;

    constructor() {
        this.client = new UserServiceClient(ServiceUrl, grpc.credentials.createInsecure());
    }

    public async createUser(userModel: UserModel): Promise<UserResponse.AsObject> {
        const createUserRequest = new CreateUserRequest()
            .setFirstname(userModel.firstName)
            .setLastname(userModel.lastName);

        const createUserResponse = await new Promise<UserResponse>(resolve => {
            this.client.createUser(
                createUserRequest,
                (_, response) => {
                    console.log(response);
                    resolve(response);
                });
        });

        const createdUser = UserResponse.toObject(false, createUserResponse);
        console.log('CREATED USER:');
        console.log(createdUser);

        return createdUser;
    };

    public async getUsers(): Promise<UserListResponse.AsObject> {
        const userListresponse = await new Promise<UserListResponse>(resolve => {
            this.client.getUsers(
                new google_protobuf_empty_pb.Empty,
                (_, response) => {
                    console.log(response);
                    resolve(response);
                });
        });

        const users = UserListResponse.toObject(false, userListresponse);
        console.log(`USERS: ${users}`);

        return users;
    }

    public listenToUserMessages(messagesCount: number): Promise<Array<UserMessage>> {
        const userMessageRequest = new UserMessagesRequest().setMessagescount(messagesCount);
        const eventStream = this.client.listenToUserMessages(userMessageRequest);

        const userMessageResult = new Promise<Array<UserMessage>>(resolve => {
            const userMessages = new Array<UserMessage>();
            eventStream.on('data', userMessage => {
                console.log(`Received message: ${userMessage}`);
                userMessages.push(userMessage);
            });
            eventStream.on('end', () => {
                resolve(userMessages);
            });
        });

        return userMessageResult;
    }

}