import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { WishesModule } from 'src/wishes/wishes.module';
import { AuthModule } from '../auth/auth.module';
import { Wish } from '../wishes/entities/wish.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Wish]),
    forwardRef(() => AuthModule),
    forwardRef(() => WishesModule),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
