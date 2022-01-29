import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } frmom '/@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(),DatabaseModule,
    GraphQLModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
