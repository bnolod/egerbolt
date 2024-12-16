import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(
    page = 1,
    search = '',
    orderBy: 'asc' | 'desc' = 'asc',
    limit = 9,
  ) {
    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
      this.prisma.product.findMany({
        where: {
          OR: [
            { name: { contains: search } },
            { description: { contains: search } },
          ],
        },
        skip,
        take: limit,
        orderBy: { price: orderBy }, // Order by the parameter
      }),
      this.prisma.product.count({
        where: {
          OR: [
            { name: { contains: search } },
            { description: { contains: search } },
          ],
        },
      }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      products,
      totalPages,
      currentPage: page,
      total,
    };
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      throw new Error(`Product with ID ${id} not found :PPP`);
    }

    return product;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
