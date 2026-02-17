import { Module } from '@nestjs/common';

import { LinksModule } from './links/links.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { RecipesModule } from './recipes/recipes.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { OpenaiService } from './openai/openai.service';

@Module({
  imports: [LinksModule, RecipesModule, IngredientsModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, OpenaiService],
})
export class AppModule {}
