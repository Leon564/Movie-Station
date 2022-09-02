import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'usuario',
      passwordField: 'contraseña',
    });
  }

  async validate(usuario): Promise<any> {
    const user = await this.authService.login(usuario);
    if (!user) {
      throw new UnauthorizedException(); // si el token es inválido
    }
    return user;
  }
}
