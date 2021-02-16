import { Injectable } from '@nestjs/common';

import { LineOfItemsDto } from './dto/line-of-items.dto';

@Injectable()
export class AppService {

  private items: string[];

  private output: string = "";

  optimize(line: LineOfItemsDto): string{
    
    this.setLine(line.items);

    this.packingLine();

    return this.output.slice(0, -1);
  }

  private setLine(items: string): void {
    this.items = items.toString().split("");
    this.output = ""
  }

  private packingLine(): void {
    if (this.items.length > 0) {
      this.packItem()
    }

    return;
  }

  private packItem(): void {
    let item = this.items.shift();
    let box = +item;
    let out = item;

    let pos = 0;
    while (this.items.length > pos) {
      if (box == 10) break;
      if (this.checkItem(pos, box)) {
        let next = +this.items[pos];
        box += next;
        out += next;

        this.items.splice(pos, 1);
      } else {
        pos++;
      }
    }
    
    this.output = this.output + '' + out + '/';
    console.log(this.output);
   
    this.packingLine();
  }

  private checkItem(pos: number, box: number): boolean {
    let item = +this.items[pos];
    return box + item <= 10;
  }
}
