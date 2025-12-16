import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuarioService implements OnModuleInit {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async onModuleInit() {
    const count = await this.usuarioRepository.count();

    if (count === 0) {
      await this.usuarioRepository.insert([
        {
          nome: 'Felipe',
          email: 'felipe@email.com',
          endereco: 'Rua A, 100',
          telefone: '11999990001',
          senha: '1234',
        },
        {
          nome: 'Yuri',
          email: 'yuri@email.com',
          endereco: 'Rua B, 200',
          telefone: '11999990002',
          senha: '1234',
        },
        {
          nome: 'Juliana',
          email: 'juliana@email.com',
          endereco: 'Rua C, 300',
          telefone: '11999990003',
          senha: '1234',
        },
      ]);
    }
  }

  async criar(usuario: Usuario) {
    const novoUsuario = this.usuarioRepository.create(usuario);
    return this.usuarioRepository.save(novoUsuario);
  }

  listar() {
    return this.usuarioRepository.find();
  }

  async buscarPorId(id: number) {
    const usuario = await this.usuarioRepository.findOneBy({ id });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return usuario;
  }

  async buscarPorNome(nome: string) {
    const usuarios = await this.usuarioRepository.find({
      where: { nome: Like(`%${nome}%`) },
    });

    if (usuarios.length === 0) {
      throw new NotFoundException('Nenhum usuário encontrado');
    }

    return usuarios;
  }

  async atualizar(id: number, usuario: Usuario) {
  const usuarioExistente = await this.usuarioRepository.preload({
    id,
    nome: usuario.nome,
    email: usuario.email,
    endereco: usuario.endereco,
    telefone: usuario.telefone,
    senha: usuario.senha,
  });

  if (!usuarioExistente) {
    throw new NotFoundException('Usuário não encontrado');
  }

  return this.usuarioRepository.save(usuarioExistente);
}


  async deletar(id: number) {
    const usuario = await this.buscarPorId(id);
    await this.usuarioRepository.remove(usuario);
  }
}
