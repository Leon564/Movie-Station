import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { Administrador } from './entities/administrador.entity';

@Controller('administrador')
export class AdministradorController {
  constructor(private readonly administradorService: AdministradorService) { }

  @Post('/create') //http://localhost:3000/administrador/create
  create(
    @Res() res,
    @Body() createAdministradorDto: CreateAdministradorDto,
  ): Promise<Administrador> {
    const create = this.administradorService.create(createAdministradorDto);

    return res.status(HttpStatus.OK).json({
      message: 'Administrador creado correctamente'
    });
  }

  @Get()
  findAll() {
    return this.administradorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.administradorService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAdministradorDto: UpdateAdministradorDto,
  ) {
    return this.administradorService.update(+id, updateAdministradorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.administradorService.remove(+id);
  }
}
