import { PrismaClient } from '@prisma/client'

import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

const seed = async () => {
  await prisma.user.create({
    data: {
      email: faker.internet.email(),
      name: faker.person.fullName(),
    },
  })
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
