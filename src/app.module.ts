import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [
    // Deixa disponível em todo o projeto as variáveis de ambiente
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Configuração do banco de dados
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3310,
      username: 'root',
      password: 'root',
      database: 'db_farmacia',
      autoLoadEntities: true,
      synchronize: true,
    }),

    CategoriaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

