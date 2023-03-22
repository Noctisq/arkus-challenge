import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'secrete',
        });
    }

    async validate(payload) {
        const {_doc} = payload;
        return { 
            userId: _doc._id,
            userName: _doc.name,
            role: _doc.role
        };
    };
}


