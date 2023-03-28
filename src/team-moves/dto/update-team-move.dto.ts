import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamMoveDto } from './create-team-move.dto';

export class UpdateTeamMoveDto extends PartialType(CreateTeamMoveDto) {}
