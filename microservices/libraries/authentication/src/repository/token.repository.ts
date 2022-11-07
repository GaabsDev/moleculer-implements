
import { Errors } from "moleculer";
import { sqlServer } from "../../../database/sqlServer";
import { TokenEntity } from "../entity/token.entity";
import { Req_Auth } from "../interface/token.interface";

export const tokenJwt = sqlServer.getRepository(TokenEntity)
.extend({
    async validDataToken(
        user: string,
    password: string,
    secret:string
    ): Promise <Req_Auth> {
        try {
            const checkValid = await this.findOne({
                where: { user, password, secret }
            });

            return checkValid;
            
        } catch (error) {
            throw new Errors.MoleculerError(error.message, 100);
        }
    },

})