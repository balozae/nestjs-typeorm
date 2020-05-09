import { Entity, Column, Unique } from 'typeorm'
import { BaseEntity } from './base.entity'

@Entity({ name: 'tag' })
@Unique(['slug'])
export class Tag extends BaseEntity {
  @Column({ type: 'varchar', length: 64 })
  slug!: string

  @Column({ type: 'varchar', length: 64 })
  name!: string

  @Column({ type: 'text', nullable: true })
  content?: string
}
