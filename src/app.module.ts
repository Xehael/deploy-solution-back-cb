import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {MessageEntity} from "./entity/message.entity";
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    entities: [MessageEntity],
    synchronize: true,
  }),TypeOrmModule.forFeature([MessageEntity])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
