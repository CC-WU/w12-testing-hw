import { Game } from './game';

describe('Game', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  it('should create an instance', () => {
    expect(new Game()).toBeTruthy();
  });

  // 建立第一個測試 (紅燈): 第一集買 1 本 總價應為 100 元
  test('Buy 1 book for the first episode', () => {
    game.addBook(1, 1);
    
    expect(game.getTotalPrice).toBe(100);
  });

  test('Buy 1 for the first episode, 1 for the second episode', () => {
    game.addBook(1, 1);
    game.addBook(2, 1);
    
    expect(game.getTotalPrice).toBe(190);
  });

  test('Buy 1 for the first episode, 2 for the second episode', () => {
    game.addBook(1, 1);
    game.addBook(2, 2);
    
    expect(game.getTotalPrice).toBe(290);
  });


});
