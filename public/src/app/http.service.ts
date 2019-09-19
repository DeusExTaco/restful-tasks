import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompileTemplateMetadata } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HttpService { // should be called TasksService (note that you name it Tasks and Service is appended

  tasks;

  constructor(private HTTP: HttpClient) {
  }

  getTasks() {
    return this.HTTP.get('/tasks');
  }

  getTaskById(id) {
    return this.HTTP.get(`/tasks/${id}`);
  }

  createTask(task) {
    const taskMap = {
      title: task.title,
      desc: task.desc
    };
    return this.HTTP.post('/tasks/', taskMap);
  }

  deleteTask(id) {
    return this.HTTP.delete(`/tasks/${id}`);
  }

  updateTask(id, editedTask) {
    const taskMap = {
      title: editedTask.title,
      desc: editedTask.desc
    };
    return this.HTTP.put(`/tasks/${id}`, taskMap);
  }

}


