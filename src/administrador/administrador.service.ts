import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { create } from 'domain';
import Module from 'module';
import { Model } from 'mongoose';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { AdminDocument, Administrador } from './entities/administrador.entity';

@Injectable()
export class AdministradorService {
  constructor(
    @InjectModel('administrador')
    private readonly adminModel: Model<AdminDocument>,
  ) {}

  async create(
    CreateAdministradorDto: CreateAdministradorDto,
  ): Promise<Administrador> {
    const NuevoAdministrador = new this.adminModel(CreateAdministradorDto);
    return await NuevoAdministrador.save();
  }

  findAll() {
    return `This action returns all administrador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} administrador`;
  }

  update(id: number, updateAdministradorDto: UpdateAdministradorDto) {
    return `This action updates a #${id} administrador`;
  }

  remove(id: number) {
    return `This action removes a #${id} administrador`;
  }
}
