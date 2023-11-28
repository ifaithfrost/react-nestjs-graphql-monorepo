
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface LoginInput {
    email: string;
    password: string;
}

export interface SignUpInput {
    email: string;
    name: string;
    password: string;
}

export interface User {
    id: string;
    email: string;
    name: string;
}

export interface AuthPayload {
    refreshToken?: Nullable<string>;
    token?: Nullable<string>;
    user?: Nullable<User>;
}

export interface IQuery {
    user(): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    login(loginInput?: Nullable<LoginInput>): Nullable<AuthPayload> | Promise<Nullable<AuthPayload>>;
    signUp(signUpInput?: Nullable<SignUpInput>): Nullable<AuthPayload> | Promise<Nullable<AuthPayload>>;
}

type Nullable<T> = T | null;
