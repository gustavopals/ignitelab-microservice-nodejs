import { Content } from './content';

describe('Notification content', () => {
	test('Deve ser possível criar uma notifiação', () => {
		const content = new Content(
			'Você recebeu uma nova solcitação de amizade',
		);

		expect(content).toBeTruthy();
	});

	test('Não deve ser possível criar uma notifiação com menos de 5 caracteres', () => {
		expect(() => new Content('aaa')).toThrow();
	});

	test('Não deve ser possível criar uma notifiação com mais de 240 caracteres', () => {
		expect(() => new Content('a'.repeat(241))).toThrow();
	});
});
