import { Controller, Get } from '@nestjs/common'
import { TagService } from './tag.service'

@Controller('tags')
export class TagController {
  constructor(private tagService: TagService) {}

  @Get()
  public async getAll() {
    return await this.tagService.getAll()
  }
}
