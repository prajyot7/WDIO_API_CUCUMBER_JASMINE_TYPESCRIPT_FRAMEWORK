"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.herokuappLoginData = void 0;
const faker_1 = require("@faker-js/faker");
const base64Utils_1 = require("../utils/base64Utils");
const herokuappBase64EncodedPassword = "U3VwZXJTZWNyZXRQYXNzd29yZCE=";
exports.herokuappLoginData = {
    validUserName: 'tomsmith',
    validPassword: () => (0, base64Utils_1.decodeFromBase64String)(herokuappBase64EncodedPassword),
    invalidUserName: faker_1.faker.internet.userName(),
    invalidPassword: faker_1.faker.internet.password(6)
};
