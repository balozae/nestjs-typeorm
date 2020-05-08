import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Tag } from '../../entity/tag.entity'
import { Repository } from 'typeorm'

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
  ) {}

  public async getAll() {
    return await this.tagRepository.find()
  }
}
