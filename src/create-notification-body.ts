import { IsNotEmpty, IsUUID } from 'class-validator';
import { Length } from 'class-validator/types/decorator/decorators';

export class CreateNotificationBody {
	@IsNotEmpty()
	@IsUUID()
	recepientId: string;
	@IsNotEmpty()
	@Length(5, 240)
	content: string;
	@IsNotEmpty()
	category: string;
}
