import Task from './task.js';

export default class Tasks {
  constructor() {
    this.listTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.show();
  }

  show() {
    document.querySelector('#list').innerHTML = '';
    this.listTasks.forEach((element) => {
      const container = document.querySelector('#list');
      // MAIN DIV
      const div = document.createElement('div');
      div.setAttribute('data-index', `${element.index}`);
      div.className = 'd-flex justify-content-between px-4 align-items-center taskElement';
      const check = document.createElement('input');
      check.className = '';
      check.setAttribute('type', 'checkbox');
      const inputText = document.createElement('input');
      inputText.setAttribute('type', 'text');
      inputText.className = `m-0 col-10 border-0 input-txt ${element.index}`;
      inputText.value = `${element.name}`;
      const div2 = document.createElement('div');
      const edit = `
      <button type="button" class="fs-6 px-1 border-0 edit pe-2" data-bs-toggle="modal" data-index=${element.index}   data-bs-target="#exampleModal">
      Edit
      </button>
      `;
      div2.innerHTML = edit;

      // trash icon
      const dots = document.createElement('i');
      dots.setAttribute('data-index', `${element.index}`);
      dots.className = 'fa-solid fa-trash';
      const fragment = document.createDocumentFragment();
      div.append(check, inputText, div2, dots);
      fragment.append(div);
      container.append(fragment);
    });
  }

  add() {
    const taskText = document.querySelector('#task-input').value;
    if (taskText === ' ') return;
    const index = this.listTasks.length + 1;
    const task = new Task(taskText, 'false', index);
    this.listTasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.listTasks));
    this.update();
    this.show();
  }

  edit(index, newName) {
    this.newName = newName;
    const local = JSON.parse(localStorage.getItem('tasks'));
    JSON.stringify(local[index - 1].name = this.newName);
    localStorage.setItem('tasks', JSON.stringify(local));
    this.listTasks = JSON.parse(localStorage.getItem('tasks'));
    this.show();
  }

  delete(index) {
    const local = JSON.parse(localStorage.getItem('tasks'));
    local.splice(index - 1, 1);
    localStorage.setItem('tasks', JSON.stringify(local));
    this.listTasks = JSON.parse(localStorage.getItem('tasks'));
    this.show();
    this.update();
  }

  update() {
    this.local = JSON.parse(localStorage.getItem('tasks'));
    this.local.forEach((element, index) => {
      element.index = index + 1;
    });
    localStorage.setItem('tasks', JSON.stringify(this.local));
  }
}
