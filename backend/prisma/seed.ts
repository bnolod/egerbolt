import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

const productTypesArray = ['animal', 'toy', 'good product', 'bad product'];

async function main() {
  // Seed product types
  for (const type of productTypesArray) {
    const existingType = await prisma.productType.findUnique({
      where: { type },
    });
    if (!existingType) {
      await prisma.productType.create({ data: { type } });
    }
  }

  // Seed Users
  const userIds = [];
  for (let i = 1; i <= 500; i++) {
    const user = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        username: faker.person.firstName() + i,
        password: faker.internet.password(),
      },
    });
    userIds.push(user.id);
  }

  // Seed Products
  const productIds = [];
  for (let i = 1; i <= 500; i++) {
    const product = await prisma.product.create({
      data: {
        name: faker.lorem.word(),
        description: faker.lorem.words(10),
        price: faker.number.int({ min: 500, max: 50000, multipleOf: 500 }),
        image: faker.image.urlLoremFlickr({
          width: 512,
          height: 512,
          category: 'product',
        }),
        quantity: faker.number.int({ min: 0, max: 50 }),
      },
    });

    productIds.push(product.id);

    // Assign Random Product Types
    for (const type of productTypesArray) {
      if (faker.datatype.boolean()) {
        await prisma.productToType.create({
          data: {
            product_id: product.id,
            product_type: type,
          },
        });
      }
    }
  }

  // Seed Carts
  for (const userId of userIds) {
    const randomProductCount = faker.number.int({ min: 1, max: 10 });
    const addedProducts = new Set(); //check products already added for this user

    for (let j = 0; j < randomProductCount; j++) {
      let randomProductId;
      do {
        randomProductId =
          productIds[faker.number.int({ min: 0, max: productIds.length - 1 })];
      } while (addedProducts.has(randomProductId)); //unique product_id for this user

      addedProducts.add(randomProductId);

      await prisma.cart.create({
        data: {
          user_id: userId,
          product_id: randomProductId,
          amount: faker.number.int({ min: 1, max: 50 }),
        },
      });
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
