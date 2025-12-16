import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../entities/categoria.entity';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  // 1️⃣ Criar Categoria
  @Post()
  criar(@Body() categoria: Categoria) {
    return this.categoriaService.criar(categoria);
  }

  // 2️⃣ Listar Categorias
  @Get()
  listar() {
    return this.categoriaService.listar();
  }

  // 3️⃣ Buscar Categoria por Nome
  // ⚠️ Deve vir ANTES do :id
  @Get('nome/:nome')
  buscarPorNome(@Param('nome') nome: string) {
    return this.categoriaService.buscarPorNome(nome);
  }

  // 4️⃣ Buscar Categoria por ID
  @Get(':id')
  buscarPorId(@Param('id') id: string) {
    return this.categoriaService.buscarPorId(+id);
  }

  // 5️⃣ Atualizar Categoria
  @Patch(':id')
  atualizar(@Param('id') id: string, @Body() categoria: Categoria) {
    return this.categoriaService.atualizar(+id, categoria);
  }

  // 6️⃣ Deletar Categoria
  @Delete(':id')
  deletar(@Param('id') id: string) {
    return this.categoriaService.deletar(+id);
  }
}
