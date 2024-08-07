import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import request from 'supertest'

import { AppModule } from '../app.module'

describe('Say Hello (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleRef.createNestApplication()

    await app.init()
  })

  test('[GET] /', async () => {
    const response = await request(app.getHttpServer()).get('/')

    expect(response.body).toEqual({
      message: 'Hello, world!',
    })
  })
})
