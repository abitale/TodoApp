import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-addtodoform',
  templateUrl: './addtodoform.component.html',
  styleUrls: ['./addtodoform.component.css']
})
export class AddtodoformComponent implements OnInit {
  @Output() newTodoEvent = new EventEmitter<Todo>();

  inputContent: string | null = null;
  inputDesc: string = '';
  message: string = ''

  addTodo() {
    if (this.inputContent != null)
    {
      const todo: Todo = {
        content: this.inputContent,
        desc: this.inputDesc,
        completed: false,
      isShown: false
      };
      
    this.message = "Todo berhasil ditambahkan";
    this.newTodoEvent.emit(todo);
    this.inputContent = null;
    }
    else
    {
      this.message = "Todo masih kosong, harap diisi terlebih dahulu";
      }
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
