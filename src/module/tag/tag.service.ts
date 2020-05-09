import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Tag } from '../../entity/tag.entity'
import { Repository } from 'typeorm'
import { TagDTO } from './tag.dto'

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
  ) {}

  public async getAll(): Promise<TagDTO[]> {
    return await this.tagRepository
      .find()
      .then(rows => rows.map(entity => TagDTO.fromEntity(entity)))
  }

  public async create(dto: TagDTO): Promise<TagDTO> {
    return this.tagRepository
      .save(dto.toEntity())
      .then(entity => TagDTO.fromEntity(entity))
  }
}
