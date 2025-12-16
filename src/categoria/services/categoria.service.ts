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

  // Inserindo dados automáticos na tabela categoria
  async onModuleInit() {
    const count = await this.categoriaRepository.count();

    if (count === 0) {
      await this.categoriaRepository.save([
        { nome: 'Medicamentos', descricao: 'Remédios controlados e não controlados' },
        { nome: 'Higiene Pessoal', descricao: 'Produtos para cuidados diários com o corpo' },
        { nome: 'Dermocosméticos', descricao: 'Cuidados com a pele, cabelo e estética' },
        { nome: 'Vitaminas e Suplementos', descricao: 'Suplementos vitamínicos e minerais' },
        { nome: 'Infantil', descricao: 'Produtos para bebês e crianças' },
      ]);
    }
  }

  //  Criar nova categoria
  criar(categoria: Categoria) {
    return this.categoriaRepository.save(categoria);
  }

  // Listar todas categorias
  listar() {
    return this.categoriaRepository.find();
  }

  // Buscar categoria por ID
  async buscarPorId(id: number) {
    const categoria = await this.categoriaRepository.findOneBy({ id });
    if (!categoria) {
      throw new NotFoundException('Categoria não encontrada');
    }
    return categoria;
  }

  //  Buscar Categoria por nome
  async buscarPorNome(nome: string) {
    const categorias = await this.categoriaRepository.find({
      where: { nome: Like(`%${nome}%`) },
    });

    if (categorias.length === 0) {
      throw new NotFoundException('Nenhuma categoria encontrada com esse nome');
    }

    return categorias;
  }

  // 5️Atualizar Categoria
  async atualizar(id: number, categoria: Categoria) {
    await this.buscarPorId(id);
    await this.categoriaRepository.update(id, categoria);
    return this.buscarPorId(id);
  }

  // 6️⃣ Deletar
  async deletar(id: number) {
    await this.buscarPorId(id);
    await this.categoriaRepository.delete(id);
  }
}
