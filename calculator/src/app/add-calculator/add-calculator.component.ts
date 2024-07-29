import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-calculator',
  templateUrl: './add-calculator.component.html',
  styleUrls: ['./add-calculator.component.css'],
})
export class AddCalculatorComponent implements OnInit {
  @Input() name: string = '';
  public value: string = '';
  public totalValue!: number;
  public errorMessage!: string;
  private delimiter: any = /,|\n/;
  constructor() {}

  ngOnInit(): void {}

  sum(): void {

    // case for empty string value
    if (this.value === '') this.totalValue = 0;

    if (this.value.startsWith('//')) {
      const splittedData = this.value.split('\n', 2);
      const modifiedValue = splittedData[0].substring(2);
      this.delimiter = new RegExp(modifiedValue);
      this.value = splittedData[1];
    }

    //  case for negative value
    const numberList = this.value.split(this.delimiter).map((n: string) => parseInt(n));
    const negatives = numberList.filter((n) => n < 0);
    if (negatives.length > 0) {
      this.errorMessage = ('negative numbers not allowed ' + negatives.join(', '));
      throw new Error("negative numbers not allowed " + negatives.join(', '));
    }

    this.totalValue = numberList.reduce((sum, current) => sum + current, 0);

  }
}
