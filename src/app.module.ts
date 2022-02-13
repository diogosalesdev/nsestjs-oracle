import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    TransactionModule,
    GraphQLModule.forRoot({
      typePaths: ['src/schema.gql'],
      include: [TransactionModule],
      path: '/test',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
