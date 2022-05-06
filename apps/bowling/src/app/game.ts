export class Game {
    private bookList = new Map<number, number>();
    private totalPrice = 0;

    // 折扣
    private catalogue = new Map([
        [1, 0],
        [2, 0.05],
        [3, 0.1],
        [4, 0.2],
        [5, 0.25],
    ]); 

    addBook(bookId: number, bookNum: number) {
        let currNum = this.bookList.get(bookId);
        if (currNum !== undefined) {
            this.bookList.set(bookId, currNum + bookNum);
        }
        else { // 第一次買此書
            this.bookList.set(bookId, bookNum);
        }
    }

    get getTotalPrice() {
        let discount = 0;
        this.bookList.forEach(function(itm){
            if (itm > 0) {
                discount++;
            }
        });
        
        if (discount > 5) discount = 5;

        let sum = 0;
        this.bookList.forEach((num) => {
            sum += num;
        });

        let bookCategory =  this.bookList.size;
        let mapValue = this.catalogue.get(discount);
        if (mapValue !== undefined) {
            this.totalPrice = (bookCategory * 100 * (1 - mapValue)) + ((sum - bookCategory) * 100);
        } 
        else {
            this.totalPrice = (bookCategory * 100) + ((sum - bookCategory) * 100);
        }

        return this.totalPrice;
    }


}
