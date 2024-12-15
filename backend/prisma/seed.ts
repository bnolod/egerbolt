import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient()

const productTypesArray = ["animal","toy","good product","bad product"]
// enum productTypes {"animal","toy","good product","bad product"}

async function main() {
    for (let n = 0; n < productTypesArray.length; n++) {
        const existingType = await prisma.productType.findUnique({
            where: { productType: productTypesArray[n] }
        });

        if (!existingType) {
            await prisma.productType.create({
                data: { productType: productTypesArray[n] }
            });
        }
    }

  for (let i = 1; i < 100; i++) {
    await prisma.user.create({
        data: {
            email: faker.internet.email(),
            username: faker.person.firstName() + i,
            password: faker.internet.password()
        }
    })
    await prisma.product.create({
        data:{
            name: faker.lorem.word(),
            description: faker.lorem.words(10),
            price: faker.number.int({min:500,max:50000,multipleOf:500}),
            image: faker.image.urlLoremFlickr(),
            type: productTypesArray[faker.number.int({min:0,max:productTypesArray.length-1})]
        }
    })
    await prisma.cart.create({
        data: {
            user_id:i,
            product_id:i,
            amount:faker.number.int({min:1,max:50})
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