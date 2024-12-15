import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient()

const productTypesArray = ["animal","toy","good product","bad product"]
enum productTypes {"animal","toy","good product","bad product"}

async function main() {
    for (let n = 0; n < productTypesArray.length; n++) {
        await prisma.productType.create({
            data: {
                productType: productTypesArray[n]
            }
        })
    }
  for (let i = 0; i < 1000; i++) {
    await prisma.user.create({
        data: {
            email: faker.internet.email(),
            username: faker.person.firstName() + i,
            password: faker.internet.password()
        }
    })
    
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })