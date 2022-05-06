import { Game } from './game';

describe('Game', () => {
  it('should create an instance', () => {
    expect(new Game()).toBeTruthy();
  });

  // 建立第一個測試 (紅燈): 第一集買 1 本 總價應為 100 元
  test('Buy 1 book for the first episode', () => {
    const game = new Game();
    game.addBook(1, 1);
    
    expect(game.getTotalPrice).toBe(100);
  });


});
