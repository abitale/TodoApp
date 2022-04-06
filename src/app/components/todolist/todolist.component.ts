import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos: Todo[] = [];

  constructor() { }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      console.log(v)
      return v;
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v,i)=> i !== id)
  }

  checkTodo(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.isShown = !v.isShown;
      return v;
    });
  }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        desc: 'First Desc',
        completed: false
      },
      {
        content: 'Second Todo',
        desc: 'Second Desc',
        completed: false
      }
    ]
  }

}
