import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { AdminDocument, Administrador } from './entities/administrador.entity';

@Injectable()
export class AdministradorService {
  constructor(
    @InjectModel('administrador')
    private readonly adminModel: Model<AdminDocument>
  ) { }

  async create(
    CreateAdministradorDto: CreateAdministradorDto,
  ): Promise<Administrador> {
    const NuevoAdministrador = new this.adminModel(CreateAdministradorDto);
    return await NuevoAdministrador.save();
  }

  async findAll(): Promise<Administrador[]> {
    const getadministrator = await this.adminModel.find();
    return getadministrator;
  }

  async findOne(id: string): Promise<Administrador> {
    const GetOne = await this.adminModel.findById(id);
    return GetOne;
  }

  async update(id: string, updateAdministradorDto: UpdateAdministradorDto) {
    return await this.adminModel.findByIdAndUpdate(id, updateAdministradorDto, { new: true });
  }

  async remove(id: string) {
    const RemoveOne = await this.adminModel.findByIdAndDelete(id)
    return RemoveOne;
  }
}
