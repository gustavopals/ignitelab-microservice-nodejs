import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
	test('Deve ser possível criar uma notifiação', () => {
		const notification = new Notification({
			content: new Content('Nova solicitação de amizade'),
			category: 'social',
			recipientId: 'example-recipient-id',
		});
		expect(notification).toBeTruthy();
	});
});
