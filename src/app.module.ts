import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriasModule } from './categorias/categorias.module';
import { JogadoresModule } from './jogadores/jogadores.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:aZoazPdqYzgCVyjC@cluster0.d8wok.mongodb.net/sradmbackend?retryWrites=true&w=majority'),
    CategoriasModule,
    JogadoresModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
