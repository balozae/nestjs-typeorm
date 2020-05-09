import { Controller, Get } from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'
import { TagService } from './tag.service'
import { TagDTO } from './tag.dto'

@Controller('tags')
export class TagController {
  constructor(private tagService: TagService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'A list of tags' })
  public async getAll(): Promise<TagDTO[]> {
    return await this.tagService.getAll()
  }
}
