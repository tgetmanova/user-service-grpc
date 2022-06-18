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
        let createUserRequest = new CreateUserRequest();
        createUserRequest.setFirstname(userModel.firstName);
        createUserRequest.setLastname(userModel.lastName);

        let createUserResponse = await new Promise<UserResponse>(resolve => {
            this.client.createUser(
                createUserRequest,
                (error, response) => {
                    console.log(response);
                    resolve(response);
                });
        });

        let createdUser = UserResponse.toObject(false, createUserResponse);
        console.log('CREATED USER:');
        console.log(createdUser);

        return createdUser;
    };

    public async getUsers(): Promise<UserListResponse.AsObject> {
        let userListresponse = await new Promise<UserListResponse>(resolve => {
            this.client.getUsers(
                new google_protobuf_empty_pb.Empty,
                (error, response) => {
                    console.log(response);
                    resolve(response);
                });
        });

        let users = UserListResponse.toObject(false, userListresponse);
        console.log(`USERS: ${users}`);

        return users;
    }

    public listenToUserMessages(messagesCount: number): Promise<Array<UserMessage>> {
        let userMessageRequest = new UserMessagesRequest().setMessagescount(messagesCount);
        let eventStream = this.client.listenToUserMessages(userMessageRequest);

        let userMessageResult = new Promise<Array<UserMessage>>(resolve => {
            let userMessages = new Array<UserMessage>();
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