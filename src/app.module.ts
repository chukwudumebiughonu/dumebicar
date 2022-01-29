import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } frmom '/@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ComponentsModule } from './components/components.module';

@Module({
  imports: [ConfigModule.forRoot(),DatabaseModule,
    GraphQLModule.forRoot({
    playground: true,
      debug: true,
      autoSchemaFile: true,
   })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
