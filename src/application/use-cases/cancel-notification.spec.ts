import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './erros/notifications-not-found';

describe('cancel Notification', () => {
	test('deve ser possível cancelar uma notificação', async () => {
		const notificationsRepository = new InMemoryNotificationsRepository();
		const cancelNotification = new CancelNotification(
			notificationsRepository,
		);

		const notification = makeNotification();

		await notificationsRepository.create(notification);

		await cancelNotification.execute({ notificationId: notification.id });

		expect(notificationsRepository.notifications[0].canceledAt).toEqual(
			expect.any(Date),
		);
	});

	test('não deve ser possível cancelar uma notificação que não existe', async () => {
		const notificationsRepository = new InMemoryNotificationsRepository();
		const cancelNotification = new CancelNotification(
			notificationsRepository,
		);

		await expect(() => {
			return cancelNotification.execute({
				notificationId: 'fake-notification-id',
			});
		}).rejects.toThrow(NotificationNotFound);
	});
});
