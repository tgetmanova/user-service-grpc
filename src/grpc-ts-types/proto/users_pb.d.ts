// package: users
// file: proto/users.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class GetUserRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): GetUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserRequest;
    static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
    export type AsObject = {
        id: number,
    }
}

export class CreateUserRequest extends jspb.Message { 
    getFirstname(): string;
    setFirstname(value: string): CreateUserRequest;
    getLastname(): string;
    setLastname(value: string): CreateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
    static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
    export type AsObject = {
        firstname: string,
        lastname: string,
    }
}

export class UserResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): UserResponse;
    getFirstname(): string;
    setFirstname(value: string): UserResponse;
    getLastname(): string;
    setLastname(value: string): UserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserResponse;
    static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
    export type AsObject = {
        id: number,
        firstname: string,
        lastname: string,
    }
}

export class UserListResponse extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<UserResponse>;
    setUsersList(value: Array<UserResponse>): UserListResponse;
    addUsers(value?: UserResponse, index?: number): UserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserListResponse): UserListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserListResponse;
    static deserializeBinaryFromReader(message: UserListResponse, reader: jspb.BinaryReader): UserListResponse;
}

export namespace UserListResponse {
    export type AsObject = {
        usersList: Array<UserResponse.AsObject>,
    }
}

export class UserMessage extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): UserMessage;
    getText(): string;
    setText(value: string): UserMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserMessage.AsObject;
    static toObject(includeInstance: boolean, msg: UserMessage): UserMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserMessage;
    static deserializeBinaryFromReader(message: UserMessage, reader: jspb.BinaryReader): UserMessage;
}

export namespace UserMessage {
    export type AsObject = {
        userid: number,
        text: string,
    }
}

export class UserMessagesRequest extends jspb.Message { 
    getMessagescount(): number;
    setMessagescount(value: number): UserMessagesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserMessagesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UserMessagesRequest): UserMessagesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserMessagesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserMessagesRequest;
    static deserializeBinaryFromReader(message: UserMessagesRequest, reader: jspb.BinaryReader): UserMessagesRequest;
}

export namespace UserMessagesRequest {
    export type AsObject = {
        messagescount: number,
    }
}
