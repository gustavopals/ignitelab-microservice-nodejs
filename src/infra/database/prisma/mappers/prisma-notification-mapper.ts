import { Notification } from '@application/entities/notification';

export class PrismaNotificationMapper {
	static toPrisma(notification: Notification) {
		return {
			id: notification.id,
			content: notification.content.value,
			category: notification.category,
			recepientId: notification.recipientId,
			reatAt: notification.readAt,
			createdAt: notification.createdAt,
		};
	}
}
