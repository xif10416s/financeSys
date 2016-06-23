export enum RespCode {
    Success = 0b0,
    DataNotFound = 0b10,
    IllegalParam = 0b100,
    AuthFailed = 0b1000,
    InvalidState = 0b10000
}
export class Response {
    static Code = RespCode;
    code: RespCode;
    msg: string;
}

export interface EntityResponse<E> extends Response {
    entity: E;
}

export interface AuthResponse extends Response {
    user: AuthUser;
}
export interface AuthUser {
    id: string;
    email: string;
    roles: string;
}