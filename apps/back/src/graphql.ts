
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class LoginInput {
    email: string;
    password: string;
}

export class SignUpInput {
    email: string;
    name: string;
    password: string;
}

export class User {
    id: string;
    email: string;
    name: string;
}

export class AuthPayload {
    refreshToken?: Nullable<string>;
    token?: Nullable<string>;
    user?: Nullable<User>;
}

export abstract class IQuery {
    abstract user(): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract login(loginInput?: Nullable<LoginInput>): Nullable<AuthPayload> | Promise<Nullable<AuthPayload>>;

    abstract signUp(signUpInput?: Nullable<SignUpInput>): Nullable<string> | Promise<Nullable<string>>;
}

type Nullable<T> = T | null;
