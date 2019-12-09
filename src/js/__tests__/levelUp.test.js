import Daemon from '../Classes/daemon';
import Magician from '../Classes/magician';

describe('Method levelUp of Daemon (extends Character)', () => {
  test('should set new properties of hero', () => {
    const daemon = new Daemon('Yeezard');
    daemon.levelUp();

    const expectedDeamon = {
      attack: 12,
      defence: 48,
      health: 100,
      level: 2,
      name: 'Yeezard',
    };

    expect(daemon).toEqual(expectedDeamon);
  });

  test('should throw Error', () => {
    const result = () => {
      const magician = new Magician('Jonoroth');
      magician.levelUp();
    };

    expect(result).toThrowError(new Error('Нельзя повысить левел умершего героя'));
  });
});
