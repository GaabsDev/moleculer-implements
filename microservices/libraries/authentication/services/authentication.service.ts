"use strict";

import { Service as MoleculerService, ServiceBroker, Context } from "moleculer";
import { Req_Auth } from "../src/interface/token.interface";
import * as dotenv from 'dotenv'
import { tokenJwt } from "../src/repository/token.repository";

dotenv.config()


export default class AuthenticationService extends MoleculerService {

	public constructor(public broker: ServiceBroker) {
		super(broker);
		this.parseServiceSchema({
			actions: {
				jwt: {
					rest: {
						method: 'POST',
						basePath: 'auth/',
						path: 'jwt/'
					},
					params: {
						username: "string",
						password: "string",
						secret: "string",
					},
					async handler(ctx: Context<{ user: string; password: string; secrety: string; }>): Promise<Req_Auth> {
						return this.ActionJWT(ctx.params);
					},
				},
			},
			name: 'authentication',
			group: 'authentication'
		});
	}

	public ActionJWT(ctx: Req_Auth) {

		try {
			const validUser = tokenJwt.validDataToken(ctx.user, ctx.password, ctx.secret)

			return validUser
			
		} catch (error) {
			throw new Error("User without access");
		}
	}
}