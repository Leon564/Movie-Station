import { Injectable, NotAcceptableException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AdministradorService } from '../administrador/administrador.service';
import { Administrador } from '../administrador/entities/administrador.entity';
import { CreateAdministradorDto } from '../administrador/dto/create-administrador.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly administradorService: AdministradorService,
    private jwtService: JwtService,
  ) {}
  async login(administradorDTO: CreateAdministradorDto) {
    const administrador: Administrador =
      await this.administradorService.getAdmin(administradorDTO.usuario);

    if (!administrador)
      return new NotAcceptableException('No existe el usuario indicado');
      const validarPassword = await bcrypt.compare(administradorDTO.contraseña, administrador.contraseña);
    if (administrador && validarPassword) {
      const payload = { usuario: administrador.usuario, id: administrador._id  };
      return {
        access_token: this.jwtService.sign(payload)
      };
    }
    return {result:false, message:'Contraseña incorrecta'};
  }
}
