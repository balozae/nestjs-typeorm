import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsUUID } from 'class-validator'
import { Tag } from '../../entity/tag.entity'

export class TagDTO implements Readonly<TagDTO> {
  @ApiProperty()
  @IsUUID()
  id: number

  @ApiProperty({ maxLength: 64 })
  @IsString()
  slug!: string

  @ApiProperty({ maxLength: 64 })
  @IsString()
  name!: string

  @ApiProperty({ nullable: true })
  @IsString()
  content?: string

  public static from(dto: Partial<TagDTO>) {
    const it = new TagDTO()
    it.id = dto.id
    it.slug = dto.slug
    it.name = dto.name
    it.content = dto.content
    return it
  }

  public static fromEntity(entity: Tag) {
    return this.from({
      id: entity.id,
      slug: entity.slug,
      name: entity.name,
      content: entity.content,
    })
  }

  public toEntity() {
    const it = new Tag()
    it.id = this.id
    it.slug = this.slug
    it.name = this.name
    it.content = this.content
    it.createdAt = new Date()
    it.updatedAt = new Date()
    return it
  }
}
