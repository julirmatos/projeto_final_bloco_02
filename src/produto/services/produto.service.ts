import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Produto } from '../entities/produto.entity';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Injectable()
export class ProdutoService implements OnModuleInit {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,

    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async onModuleInit() {
    const count = await this.produtoRepository.count();
    if (count > 0) return;

    const categorias = await this.categoriaRepository.find();

    const produtos: Produto[] = [];

    categorias.forEach((categoria: Categoria) => {
      produtos.push(
        this.produtoRepository.create({
          nome: `Produto A - ${categoria.nome}`,
          descricao: `Descrição do produto A da categoria ${categoria.nome}`,
          preco: 19.9,
          categoria: categoria,
        }),
        this.produtoRepository.create({
          nome: `Produto B - ${categoria.nome}`,
          descricao: `Descrição do produto B da categoria ${categoria.nome}`,
          preco: 29.9,
          categoria: categoria,
        }),
      );
    });

    await this.produtoRepository.save(produtos);
  }

  async criar(produto: Produto) {
    return this.produtoRepository.save(produto);
  }

  listar() {
    return this.produtoRepository.find();
  }

  async buscarPorId(id: number) {
    const produto = await this.produtoRepository.findOneBy({ id });

    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }

    return produto;
  }

  async buscarPorNome(nome: string) {
    const produtos = await this.produtoRepository.find({
      where: { nome: Like(`%${nome}%`) },
    });

    if (produtos.length === 0) {
      throw new NotFoundException('Nenhum produto encontrado');
    }

    return produtos;
  }

  async atualizar(id: number, produto: Produto) {
    const produtoExistente = await this.produtoRepository.preload({
      id,
      nome: produto.nome,
      descricao: produto.descricao,
      preco: produto.preco,
      categoria: produto.categoria,
    });

    if (!produtoExistente) {
      throw new NotFoundException('Produto não encontrado');
    }

    return this.produtoRepository.save(produtoExistente);
  }

  async deletar(id: number) {
    const produto = await this.buscarPorId(id);
    await this.produtoRepository.remove(produto);
  }
}
