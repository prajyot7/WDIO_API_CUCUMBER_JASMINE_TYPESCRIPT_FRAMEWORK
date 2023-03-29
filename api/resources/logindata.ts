import { faker } from '@faker-js/faker';
import { decodeFromBase64String } from "../utils/base64Utils";

const herokuappBase64EncodedPassword = "U3VwZXJTZWNyZXRQYXNzd29yZCE=";

export const herokuappLoginData = {
    validUserName: 'tomsmith',
    validPassword: () => decodeFromBase64String(herokuappBase64EncodedPassword),
    invalidUserName: faker.internet.userName(),
    invalidPassword: faker.internet.password(6)
}