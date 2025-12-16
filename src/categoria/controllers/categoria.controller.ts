import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../entities/categoria.entity';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  criar(@Body() categoria: Categoria) {
    return this.categoriaService.criar(categoria);
  }

  @Get()
  listar(@Query('nome') nome?: string) {
    if (nome) {
      return this.categoriaService.buscarPorNome(nome);
    }
    return this.categoriaService.listar();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string) {
    return this.categoriaService.buscarPorId(+id);
  }

  @Patch(':id')
  atualizar(@Param('id') id: string, @Body() categoria: Categoria) {
    return this.categoriaService.atualizar(+id, categoria);
  }

  @Delete(':id')
  deletar(@Param('id') id: string) {
    return this.categoriaService.deletar(+id);
  }
}
