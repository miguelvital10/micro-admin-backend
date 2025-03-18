import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { jogadorSchema } from './interfaces/jogadores/jogador.schema';
import { CategoriaSchema } from './interfaces/categorias/categoria.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:aZoazPdqYzgCVyjC@cluster0.d8wok.mongodb.net/sradmbackend?retryWrites=true&w=majority'),
    MongooseModule.forFeature([
    { name: 'Jogador', schema: jogadorSchema },
    { name: 'Categoria', schema: CategoriaSchema }
  ]),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
