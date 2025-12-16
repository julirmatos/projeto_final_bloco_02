import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../entities/usuario.entity';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  criar(@Body() usuario: Usuario) {
    return this.usuarioService.criar(usuario);
  }

  @Get()
  listar(@Query('nome') nome?: string) {
    if (nome) {
      return this.usuarioService.buscarPorNome(nome);
    }
    return this.usuarioService.listar();
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.buscarPorId(id);
  }

  @Patch(':id')
  atualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() usuario: Usuario,
  ) {
    return this.usuarioService.atualizar(id, usuario);
  }

  @Delete(':id')
  deletar(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.deletar(id);
  }
}
