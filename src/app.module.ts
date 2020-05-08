import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { configService } from './config/config.service'
import { TagModule } from './module/tag/tag.module'

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()), TagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
