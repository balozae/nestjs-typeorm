import { createConnection, ConnectionOptions } from 'typeorm'
import { configService } from '../config/config.service'
import { TagService } from '../module/tag/tag.service'
import { TagDTO } from '../module/tag/tag.dto'
import { Tag } from '../entity/tag.entity'

async function run() {
  const options = {
    ...configService.getTypeOrmConfig(),
    entities: ['**/entity/*.entity.ts'],
    debug: true,
  }

  const connection = await createConnection(options as ConnectionOptions)
  const tagService = new TagService(connection.getRepository(Tag))

  const tags = [
    TagDTO.from({ slug: 'a', name: 'scout', content: 'b43' }),
    TagDTO.from({ slug: 'b', name: 'kak to tak', content: 'bratan' }),
    TagDTO.from({ slug: 'c', name: 'white', content: 'black' }),
  ]

  const promises = tags.map(dto =>
    tagService.create(dto).then(res => (console.log('done ->', res.name), res)),
  )

  return await Promise.all(promises)
}

run()
  .then(() => console.log('successful seed'))
  .catch(error => console.error(error))
