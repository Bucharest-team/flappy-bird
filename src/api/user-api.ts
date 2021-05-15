import HTTPTransfort from './http';

const PATH = 'https://ya-praktikum.tech/api/v2';

const request = new HTTPTransfort(PATH);
const headersJson = {
    'Content-Type': 'application/json',
};

export type Registration = {
    first_name: 'string';
    second_name: 'string';
    login: 'string';
    email: 'string';
    password: 'string';
    passwordTwo?: 'string';
    phone: 'string';
};

export type Login = {
    login: 'string';
    password: 'string';
};

const STATUS_OK = 200;

export class UserApi {
    static async login(data: Login) {
        try {
            const resp = await request.post('/auth/signin', {
                data,
                headers: headersJson,
            });

            if (resp.status !== STATUS_OK) {
                throw new Error(resp.response);
            }

            return resp.response;
        } catch (e) {
            throw new Error(e);
        }
    }

    static async register(data: Registration) {
        try {
            const resp = await request.post('/auth/signup', {
                data,
                headers: headersJson,
            });

            if (resp.status !== STATUS_OK) {
                throw new Error(resp.response);
            }

            return resp.response;
        } catch (e) {
            throw new Error(e);
        }
    }
}
