import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { Administrador } from './entities/administrador.entity';
import * as bcrypt from 'bcrypt'

@Controller('administrador')
export class AdministradorController {
  constructor(private readonly administradorService: AdministradorService) { }

  @Post('/create') //http://localhost:3000/administrador/create
  async create(@Res() res, @Body() createAdministradorDto: CreateAdministradorDto,): Promise<Administrador> {

    const saltOrRounds = 10;
    const claveEncriptada = await bcrypt.hash(createAdministradorDto.contraseña, saltOrRounds);
    createAdministradorDto.contraseña = claveEncriptada;

    const New = await this.administradorService.create(createAdministradorDto);
    return res.status(HttpStatus.OK).json({
      mensaje: 'Administrador creado correctamente',
      New
    });
  }

  @Get('/')
  async findAll(@Res() res) {
    const GetAll = await this.administradorService.findAll();
    return res.status(HttpStatus.OK).json({
      mensaje: 'Listado de todos los administradores',
      GetAll
    });
  }

  @Get('/:id')
  async findOne(@Res() res, @Param('id') id: string) {
    const GetOne = await this.administradorService.findOne(id);
    if (!GetOne) throw new NotFoundException("El administrador no existe")
    return res.status(HttpStatus.OK).json({
      mensaje: 'Administrador consultado con exito',
      GetOne
    })
  }

  @Patch(':id')
  async update(@Res() res,
    @Param('id') id: string,
    @Body() updateAdministradorDto: UpdateAdministradorDto,
  ) {

    const Update = await this.administradorService.update(id, updateAdministradorDto);
    if (!Update) throw new NotFoundException("El administrador no existe")
    return res.status(HttpStatus.OK).json({
      mensaje: 'Administrador editado con exito',
      Update
    })
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const RemoveOne = await this.administradorService.remove(id);
    if (!RemoveOne) throw new NotFoundException("El administrador no existe")
    return res.status(HttpStatus.OK).json({
      mensaje: 'Administrador eliminado con éxito',
      RemoveOne
    });
  }
}
