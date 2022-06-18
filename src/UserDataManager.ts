import { ContactModel } from "./data/ContactModel";
import { UserModel } from "./data/UserModel";
import faker  from "@faker-js/faker";

export class UserDataManager {

    static Contacts: Array<ContactModel> = [
        { id: faker.datatype.number(), email: faker.internet.exampleEmail(), phone: faker.phone.phoneNumber() },
        { id: faker.datatype.number(), email: faker.internet.exampleEmail(), phone: "4454523232" }
    ]
    
    static Users: Array<UserModel> = [
        { id: faker.datatype.number(), firstName: faker.name.findName(), lastName: faker.name.lastName(), contacts: this.Contacts }
    ]

    static addUser(firstName: string, lastName: string) : UserModel {    
        let newUser : UserModel =  { id: faker.datatype.number(), firstName, lastName, contacts: [] }
        UserDataManager.Users.push(newUser);
        return newUser;
    }
}