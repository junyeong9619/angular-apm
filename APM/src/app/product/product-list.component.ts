import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { IPromise } from 'q';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    constructor(private _productService: ProductService) {

    }

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    ngOnInit(): void {
        this._productService.getProducts().subscribe(products => {
            this.products = products;
            this.filteredProducts = this.products;
        }, error => this.errorMessage = <any>error);
    }

    onRatingClicked(msg: string): void {
        this.pageTitle = msg;
    }
    filteredProducts: IProduct[];
    products: IProduct[] = [];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}
