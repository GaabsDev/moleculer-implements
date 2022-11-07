"use strict";

import { Service as MoleculerService, ServiceBroker, Context } from "moleculer";
import { Service } from 'moleculer-decorators'
import { Req_Auth } from "../src/interface/token.interface";

@Service({
	name: 'authentication',
	group: 'authentication'
})
export default class AuthenticationService extends MoleculerService {

	public constructor(public broker: ServiceBroker) {
		super(broker);
		this.parseServiceSchema({
			actions: {
				jwt: {
					rest: "/jwt",
					params: {
						user: "string",
						password: "string",
						secrety: "string",
					},
					async handler(ctx: Context<{ user: string, password: string, secrety: string }>): Promise<Req_Auth> {
						return this.ActionJWT(ctx.params);
					},
				},
			},
			name: 'authentication'
		});
	}

	// Action
	public ActionJWT(): string {

		return "";
	}
}