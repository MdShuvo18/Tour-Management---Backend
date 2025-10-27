import type { Types } from "mongoose";

export enum Role {
    SUPER_ADMIN = "SUPER_ADMIN",
    USER = "USER",
    ADMIN = "ADMIN",
    GUIDE = "GUIDE"
}

export enum IsActive {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BLOCKED = "BLOCKED"
}

export interface IAuthProvider {
    provider: string;
    providerId: string;
}

export interface Iuser {
    name: string;
    email: string;
    password?: string;
    phone?: number;
    picture?: string;
    address?: string;
    isDeleted?: string;
    isActive?: IsActive;
    isVerified?: string;
    role: Role;
    auth: IAuthProvider[];
    bookings?: Types.ObjectId[];
    guides?: Types.ObjectId[]

}