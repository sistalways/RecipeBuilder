import { Injectable ,ForbiddenException, NotFoundException} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RecipesService {}
