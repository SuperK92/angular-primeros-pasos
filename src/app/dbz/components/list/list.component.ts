
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

/*   @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    //TODO: Emitir ID personaje

    console.log({index});

    this.onDelete.emit(index);
  }
 */

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  deleteCharacterById(id: string) {
    this.onDelete.emit(id);
    console.log({id});
  }

 }
