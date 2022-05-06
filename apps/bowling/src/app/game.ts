export class Game {
    private bookList: number[] = [];
    private totalPrice = 0;

    private catalogue = new Map([
        [1, 0],
        [2, 0.05],
        [3, 0.1],
        [4, 0.2],
        [5, 0.25],
    ]); 

    addBook(bookId: number, bookNum: number) {
        this.bookList[bookId++] = bookNum;
    }

    get getTotalPrice() {
        let discount = this.bookList.filter(item => item != 0).length;
        if (discount > 5) discount = 5;
        let mapValue = this.catalogue.get(discount);
        if (mapValue !== undefined) {
            return this.bookList.reduce(x => x) * 100 * (1 - mapValue);
        } 
        else {
            return this.bookList.reduce(x => x) * 100;
        }
    }


}
