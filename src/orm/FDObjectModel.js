import pic from '../images/magn-glass.png'


export default class FDObjectModel {
    constructor() {
        this.categoryName = '';
        this.categoryId = '123456789';
        this.productName = 'dummy object';
        this.productId = '9876543210';
        this.productImage = pic;
        this.productAllImages = pic;
        this.productUrl = 'address';
        this.originalPrice = 0;
        this.salePrice = 0;
        this.commissionRate = 0;
        this.outOfStock = '';
        this.discount = 0;
        this.clickUrl = 'https://google.com';
    }
}