import pic from '../images/magn-glass.png'


export default class FDObjectModel {
    constructor() {
        this.id = 0;
        this.categoryId = '123456789';
        this.productName = 'dummy object';
        this.productId = '9876543210';
        this.productImage = pic;
        this.allImages = [];
        this.productUrl = 'address';
        this.price = 0.0;
        this.clickUrl = 'https://google.com';
    }
}