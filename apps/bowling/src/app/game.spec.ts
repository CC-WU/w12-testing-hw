import { Game } from './game';

describe('Game', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  it('should create an instance', () => {
    expect(new Game()).toBeTruthy();
  });

  // 建立第一個測試: 第一集買 1 本 總價應為 100 元
  test('1 copies of the first book', () => {
    game.addBook(1, 1);
    
    expect(game.getTotalPrice).toBe(100);
  });

  // 建立第二個測試: 第一集買 1 本、第二集買 1 本，總價應為 190 元
  test('1 copies of the first book and 1 copies of the second book', () => {
    game.addBook(1, 1);
    game.addBook(2, 1);
    
    expect(game.getTotalPrice).toBe(190);
  });

  // 建立第三個測試: 第一集買 1 本、第二集買 2 本，總價應為 290 元 (要不同集數才有折扣，所以第二集第二本沒有折扣)
  test('1 copies of the first book and 2 copies of the second book', () => {
    game.addBook(1, 1);
    game.addBook(2, 2);
    
    expect(game.getTotalPrice).toBe(290);
  });

  // 建立第四個測試: 第一集買 2 本、第二集買 2 本、第三集買 2 本、第四集買 1 本、第五集買 1 本: ，總價應為 675 元
  test('2 copies of the first book, 2 copies of the second book, 2 copies of the third book, 1 copy of the fourth book and 1 copy of the fifth book', () => {
    game.addBook(1, 2);
    game.addBook(2, 2);
    game.addBook(3, 2);
    game.addBook(4, 1);
    game.addBook(5, 1);
    
    expect(game.getTotalPrice).toBe(675);
  });


});
