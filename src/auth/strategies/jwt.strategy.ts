import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();

//analiza el token que estamos enviando con cada petición

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET, // esta llave debe de ser la misma aqui y en el modulo auth
    });
  }

  async validate(payload: any) {
    return { usuario: payload.usuario };
  }
}