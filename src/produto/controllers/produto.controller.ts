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
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../entities/produto.entity';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  criar(@Body() produto: Produto) {
    return this.produtoService.criar(produto);
  }

  @Get()
  listar(@Query('nome') nome?: string) {
    if (nome) {
      return this.produtoService.buscarPorNome(nome);
    }
    return this.produtoService.listar();
  }

  @Get('categoria/:id')
  buscarPorId(@Param('id') id: string) {
    return this.produtoService.buscarPorId(+id);
  }

  @Patch(':id')
  atualizar(@Param('id') id: string, @Body() produto: Produto) {
    return this.produtoService.atualizar(+id, produto);
  }

  @Delete(':id')
  deletar(@Param('id') id: string) {
    return this.produtoService.deletar(+id);
  }
}
