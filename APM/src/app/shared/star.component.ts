import { Component } from "@angular/core";
import { OnChanges } from "@angular/core";
import { Input } from "@angular/core";
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5
    }
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    } 
}