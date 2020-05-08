import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TagService } from './tag.service'
import { TagController } from './tag.controller'
import { Tag } from '../../entity/tag.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Tag])],
  providers: [TagService],
  controllers: [TagController],
  exports: [],
})
export class TagModule {}
