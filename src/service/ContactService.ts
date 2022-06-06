import { Status } from '@grpc/grpc-js/build/src/constants';
import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js/build/src/server-call';
import { Contact, GetUserContactRequest, UserContactsResponse } from "../grpc-ts-types/proto/contacts_pb";
import { UserDataManager } from "./UserDataManager";

export class ContactService {

    getUserContacts(call: ServerUnaryCall<GetUserContactRequest, UserContactsResponse>, callback: sendUnaryData<UserContactsResponse>) {

        const user = UserDataManager.Users.find(u => u.id == call.request.getUserid());

        if (!user) {
            callback({ code: Status.NOT_FOUND, details: `User with Id=${call.request.getUserid()} is not found` }, null);
        }
        const userContactsResponse = new UserContactsResponse();
        const contacts = user?.contacts?.map(c => {
            let contact = new Contact();
            contact.setEmail(c.email);
            contact.setPhone(c.phone);
            contact.setId(c.id);
            return contact;
        }) ?? [];
        userContactsResponse.setContactList(contacts);
        callback(null, userContactsResponse);
    }
}