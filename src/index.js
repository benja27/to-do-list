/*eslint-disable */
import './style.css';

import Tasks from './modules/tasks.js';
import Checkbox from './modules/checkbox.js';
import { toInteger } from 'lodash';

const tasks = new Tasks();
const checkbox = new Checkbox()

if(localStorage.getItem('task')){
  checkbox.test()
  checkbox.clean()
}


let index;

document.querySelector('#task-form').addEventListener('submit',(e) =>{
  e.preventDefault() 
  let update = document.querySelector("#save").getAttribute("type") 
  
  if(document.querySelector("#add-task").getAttribute("type") === "submit"){      
    tasks.add()
  }else if(update === "submit"){    
      let newName = document.querySelector("#newName").value          
      tasks.edit(index, newName)
  }  
  document.querySelector("#task-input").value = " "
})

document.querySelector('#list').addEventListener('click',e=>{  
  if(e.target.matches(".edit")){     
    document.querySelector("#add-task").setAttribute("type","button")    
    document.querySelector("#save").setAttribute("type","submit")
    let targetIndex = toInteger(e.srcElement.getAttribute("data-index"))        
    index = targetIndex
    let local = JSON.parse(localStorage.getItem('tasks'))
    let placeholder = local[index-1].name     
    document.querySelector("#newName").value = placeholder
  }
  if(e.target.matches(".fa-trash")){
    let index = toInteger(e.srcElement.getAttribute("data-index"))    
    tasks.delete(index)
  }

  if(e.target.matches(".check")){
    checkbox.test()    
  }  
})

document.querySelector("#clear-completed").addEventListener("click",e=>{
  checkbox.clean()
  tasks.update()
  tasks.show()
})


document.querySelector("#task-input").addEventListener('click',e=>{
  document.querySelector('#add-task').setAttribute('type', 'submit');
  document.querySelector('#save').setAttribute('type', 'button');
  document.querySelector('#newName').value = ""
})