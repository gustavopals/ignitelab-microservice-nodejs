import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send Notification', () => {
	test('deve ser possível enviar uma notificação', async () => {
		const notificationsRepository = new InMemoryNotificationsRepository();
		const sendNotification = new SendNotification(notificationsRepository);

		const { notification } = await sendNotification.execute({
			content: 'Esta é uma notificação',
			category: 'social',
			recipientId: 'example-recipient-id',
		});

		expect(notificationsRepository.notifications).toHaveLength(1);
		expect(notificationsRepository.notifications[0]).toEqual(notification);
	});
});
