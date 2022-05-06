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
        this.bookList.set(bookId, this.isundefined(currNum) + bookNum);
    }

    get getTotalPrice() {
        // 總共買幾本書
        let totalBookNumPurchases = 0;
        this.bookList.forEach((eachBookNum) =>{
            totalBookNumPurchases += eachBookNum;
        });

        // 總共買幾總書
        let totalBookCategoryPurchases =  this.bookList.size;

        // 折扣
        let discount = this.catalogue.get(totalBookCategoryPurchases);

        // 總價錢
        this.totalPrice = (totalBookCategoryPurchases * 100 * (1 - this.isundefined(discount))) + ((totalBookNumPurchases - totalBookCategoryPurchases) * 100);
        
        return this.totalPrice;
    }

    private isundefined(item: any) {
        if (item !== undefined) {
            return item;
        }
        else {
            return 0;
        }
    }

}
