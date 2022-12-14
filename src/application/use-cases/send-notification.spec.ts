import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationsRepository = {
	async create(notification: Notification) {
		notifications.push(notification);
	},
};

describe('Send Notification', () => {
	test('deve ser possível enviar uma notificação', async () => {
		const sendNotification = new SendNotification(notificationsRepository);

		await sendNotification.execute({
			content: 'Esta é uma notificação',
			category: 'social',
			recipientId: 'example-recipient-id',
		});

		expect(notifications).toHaveLength(1);
	});
});
