// package: contacts
// file: proto/contacts.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetUserContactRequest extends jspb.Message { 
    getUserid(): number;
    setUserid(value: number): GetUserContactRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserContactRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserContactRequest): GetUserContactRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserContactRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserContactRequest;
    static deserializeBinaryFromReader(message: GetUserContactRequest, reader: jspb.BinaryReader): GetUserContactRequest;
}

export namespace GetUserContactRequest {
    export type AsObject = {
        userid: number,
    }
}

export class UserContactsResponse extends jspb.Message { 
    clearContactList(): void;
    getContactList(): Array<Contact>;
    setContactList(value: Array<Contact>): UserContactsResponse;
    addContact(value?: Contact, index?: number): Contact;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserContactsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserContactsResponse): UserContactsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserContactsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserContactsResponse;
    static deserializeBinaryFromReader(message: UserContactsResponse, reader: jspb.BinaryReader): UserContactsResponse;
}

export namespace UserContactsResponse {
    export type AsObject = {
        contactList: Array<Contact.AsObject>,
    }
}

export class Contact extends jspb.Message { 
    getId(): number;
    setId(value: number): Contact;
    getEmail(): string;
    setEmail(value: string): Contact;
    getPhone(): string;
    setPhone(value: string): Contact;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Contact.AsObject;
    static toObject(includeInstance: boolean, msg: Contact): Contact.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Contact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Contact;
    static deserializeBinaryFromReader(message: Contact, reader: jspb.BinaryReader): Contact;
}

export namespace Contact {
    export type AsObject = {
        id: number,
        email: string,
        phone: string,
    }
}
