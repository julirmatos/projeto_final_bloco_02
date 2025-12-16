import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Categoria } from '../entities/categoria.entity';

@Injectable()
export class CategoriaService implements OnModuleInit {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async onModuleInit() {
    const count = await this.categoriaRepository.count();

    if (count === 0) {
      await this.categoriaRepository.insert([
        { nome: 'Medicamentos', descricao: 'Remédios controlados e não controlados' },
        { nome: 'Higiene Pessoal', descricao: 'Produtos para cuidados diários com o corpo' },
        { nome: 'Dermocosméticos', descricao: 'Cuidados com a pele, cabelo e estética' },
        { nome: 'Vitaminas e Suplementos', descricao: 'Suplementos vitamínicos e minerais' },
        { nome: 'Infantil', descricao: 'Produtos para bebês e crianças' },
      ]);
    }
  }

  async criar(categoria: Categoria) {
    const novaCategoria = this.categoriaRepository.create({
      nome: categoria.nome,
      descricao: categoria.descricao,
    });

    return this.categoriaRepository.save(novaCategoria);
  }

  listar() {
    return this.categoriaRepository.find();
  }

  async buscarPorId(id: number) {
    const categoria = await this.categoriaRepository.findOneBy({ id });

    if (!categoria) {
      throw new NotFoundException('Categoria não encontrada');
    }

    return categoria;
  }

  async buscarPorNome(nome: string) {
    const categorias = await this.categoriaRepository.find({
      where: { nome: Like(`%${nome}%`) },
    });

    if (categorias.length === 0) {
      throw new NotFoundException('Nenhuma categoria encontrada');
    }

    return categorias;
  }

  async atualizar(id: number, categoria: Categoria) {
    const categoriaExistente = await this.categoriaRepository.preload({
      id,
      nome: categoria.nome,
      descricao: categoria.descricao,
    });

    if (!categoriaExistente) {
      throw new NotFoundException('Categoria não encontrada');
    }

    return this.categoriaRepository.save(categoriaExistente);
  }

  async deletar(id: number) {
    const categoria = await this.buscarPorId(id);
    await this.categoriaRepository.remove(categoria);
  }
}
