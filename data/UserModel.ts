import { ContactModel } from "./ContactModel";

export type UserModel = {
    id: number;
    firstName: string;
    lastName: string;
    contacts?: Array<ContactModel>
}