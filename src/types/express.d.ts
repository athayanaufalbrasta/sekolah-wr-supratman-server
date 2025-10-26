import { Request } from "express";

export interface JwtUserPayload {
	user_id: string;
	role_id: number;
	email: string;
	iat: number;
	exp: number;
}

export interface csrfToken {
	(): string;
}

declare module "express-serve-static-core" {
	/**
	 * Menggabungkan interface 'Request' bawaan Express.
	 * Properti 'user' kini tersedia di req.user setelah middleware.
	 */
	interface Request {
		user?: JwtUserPayload | string | jwt.JwtPayload;
		csrfToken?: csrfToken;
	}
}
