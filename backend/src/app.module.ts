import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { CartsModule } from './carts/carts.module';

@Module({
  imports: [UsersModule, ProductsModule, AuthModule, CartsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
