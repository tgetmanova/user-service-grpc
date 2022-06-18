// package: users
// file: proto/users.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_users_pb from "../proto/users_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUser: IUserServiceService_IgetUser;
    getUsers: IUserServiceService_IgetUsers;
    createUser: IUserServiceService_IcreateUser;
    listenToUserMessages: IUserServiceService_IlistenToUserMessages;
}

interface IUserServiceService_IgetUser extends grpc.MethodDefinition<proto_users_pb.GetUserRequest, proto_users_pb.UserResponse> {
    path: "/users.UserService/getUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_users_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<proto_users_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<proto_users_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<proto_users_pb.UserResponse>;
}
interface IUserServiceService_IgetUsers extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, proto_users_pb.UserListResponse> {
    path: "/users.UserService/getUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<proto_users_pb.UserListResponse>;
    responseDeserialize: grpc.deserialize<proto_users_pb.UserListResponse>;
}
interface IUserServiceService_IcreateUser extends grpc.MethodDefinition<proto_users_pb.CreateUserRequest, proto_users_pb.UserResponse> {
    path: "/users.UserService/createUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_users_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<proto_users_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<proto_users_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<proto_users_pb.UserResponse>;
}
interface IUserServiceService_IlistenToUserMessages extends grpc.MethodDefinition<proto_users_pb.UserMessagesRequest, proto_users_pb.UserMessage> {
    path: "/users.UserService/listenToUserMessages";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_users_pb.UserMessagesRequest>;
    requestDeserialize: grpc.deserialize<proto_users_pb.UserMessagesRequest>;
    responseSerialize: grpc.serialize<proto_users_pb.UserMessage>;
    responseDeserialize: grpc.deserialize<proto_users_pb.UserMessage>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    getUser: grpc.handleUnaryCall<proto_users_pb.GetUserRequest, proto_users_pb.UserResponse>;
    getUsers: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, proto_users_pb.UserListResponse>;
    createUser: grpc.handleUnaryCall<proto_users_pb.CreateUserRequest, proto_users_pb.UserResponse>;
    listenToUserMessages: grpc.handleServerStreamingCall<proto_users_pb.UserMessagesRequest, proto_users_pb.UserMessage>;
}

export interface IUserServiceClient {
    getUser(request: proto_users_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: proto_users_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: proto_users_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UserListResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UserListResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UserListResponse) => void): grpc.ClientUnaryCall;
    createUser(request: proto_users_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: proto_users_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: proto_users_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UserResponse) => void): grpc.ClientUnaryCall;
    listenToUserMessages(request: proto_users_pb.UserMessagesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_users_pb.UserMessage>;
    listenToUserMessages(request: proto_users_pb.UserMessagesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_users_pb.UserMessage>;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUser(request: proto_users_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: proto_users_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: proto_users_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UserListResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UserListResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UserListResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: proto_users_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: proto_users_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: proto_users_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_users_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public listenToUserMessages(request: proto_users_pb.UserMessagesRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_users_pb.UserMessage>;
    public listenToUserMessages(request: proto_users_pb.UserMessagesRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_users_pb.UserMessage>;
}
