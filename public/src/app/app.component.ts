import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'public';
  tasks: any = [];
  single: any = {
    desc: '',
    title: ''
  };
  newTask: any = {
    title: '',
    desc: ''
  };
  editedTask: any = {
    title: '',
    desc: ''
  };
  showForm: boolean;
  editId: any = '';
  showDetails: boolean;

  constructor(private HTTP: HttpService) {
  }

  ngOnInit() {
  }

  getTasks() {
    const observable = this.HTTP.getTasks();
    observable.subscribe(data => {
      this.tasks = data;
    });
  }

  onButtonClickGetAll(): void {
    this.getTasks();
  }

  getTaskById(id) {
    const observable = this.HTTP.getTaskById(id);
    observable.subscribe(data => {
      this.single = data;
    });
  }

  onButtonClickGetOne(id: string): void {
    this.showDetails = true;
    this.getTaskById(id);
  }

  deleteTask(id) {
    const observable = this.HTTP.deleteTask(id);
    observable.subscribe(data => {
      this.getTasks();
    });
  }

  onButtonClickDelete(id: string): void {
    this.deleteTask(id);
  }

  createTask(task) {
    const observable = this.HTTP.createTask(task);
    observable.subscribe(data => {
      this.getTasks();
    });
    this.newTask = {title: '', desc: ''};
  }

  onButtonClickCreate(): void {
    this.createTask(this.newTask);
  }

  updateTask(id, task) {
    const observable = this.HTTP.updateTask(id, task);
    observable.subscribe(data => {
      this.getTasks();
    });
    this.showForm = false;
  }

  onButtonClickUpdate(id, task): void {
    this.showForm = true;
    this.editedTask = {
      title: task.title,
      desc: task.desc
    };
    this.editId = id;
  }

  onButtonClickCancelEdit(): void {
    this.showForm = false;
    this.editedTask = {
      title: '',
      desc: ''
    };
    this.editId = '';
  }

}

// error messages while typing is a blackbelt feature

