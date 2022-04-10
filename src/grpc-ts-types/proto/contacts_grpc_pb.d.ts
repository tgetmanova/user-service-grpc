// package: contacts
// file: proto/contacts.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as proto_contacts_pb from "../proto/contacts_pb";

interface IContactServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUserContacts: IContactServiceService_IgetUserContacts;
}

interface IContactServiceService_IgetUserContacts extends grpc.MethodDefinition<proto_contacts_pb.GetUserContactRequest, proto_contacts_pb.UserContactsResponse> {
    path: "/contacts.ContactService/getUserContacts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_contacts_pb.GetUserContactRequest>;
    requestDeserialize: grpc.deserialize<proto_contacts_pb.GetUserContactRequest>;
    responseSerialize: grpc.serialize<proto_contacts_pb.UserContactsResponse>;
    responseDeserialize: grpc.deserialize<proto_contacts_pb.UserContactsResponse>;
}

export const ContactServiceService: IContactServiceService;

export interface IContactServiceServer {
    getUserContacts: grpc.handleUnaryCall<proto_contacts_pb.GetUserContactRequest, proto_contacts_pb.UserContactsResponse>;
}

export interface IContactServiceClient {
    getUserContacts(request: proto_contacts_pb.GetUserContactRequest, callback: (error: grpc.ServiceError | null, response: proto_contacts_pb.UserContactsResponse) => void): grpc.ClientUnaryCall;
    getUserContacts(request: proto_contacts_pb.GetUserContactRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_contacts_pb.UserContactsResponse) => void): grpc.ClientUnaryCall;
    getUserContacts(request: proto_contacts_pb.GetUserContactRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_contacts_pb.UserContactsResponse) => void): grpc.ClientUnaryCall;
}

export class ContactServiceClient extends grpc.Client implements IContactServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUserContacts(request: proto_contacts_pb.GetUserContactRequest, callback: (error: grpc.ServiceError | null, response: proto_contacts_pb.UserContactsResponse) => void): grpc.ClientUnaryCall;
    public getUserContacts(request: proto_contacts_pb.GetUserContactRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_contacts_pb.UserContactsResponse) => void): grpc.ClientUnaryCall;
    public getUserContacts(request: proto_contacts_pb.GetUserContactRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_contacts_pb.UserContactsResponse) => void): grpc.ClientUnaryCall;
}
