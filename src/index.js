/*eslint-disable */
import './style.css';

import Tasks from './modules/tasks.js';
import { toInteger } from 'lodash';

const tasks = new Tasks();
let index;

document.querySelector('#task-form').addEventListener('submit',(e) =>{
  e.preventDefault()
  if(document.querySelector("#newName").value === ""){        
    tasks.add()
  }else if(document.querySelector("#newName").value !== ""){        
    let newName = document.querySelector("#newName").value    
    tasks.edit(index, newName)
  }   
  document.querySelector("#task-input").value = " "
})


document.querySelector('#list').addEventListener('click',e=>{
  if(e.target.matches(".edit")){ 
    let targetIndex = toInteger(e.srcElement.getAttribute("data-index"))        
    index = targetIndex
    document.querySelector(".btn-submit").setAttribute("type","button")
  }
  if(e.target.matches(".fa-trash")){
    let index = toInteger(e.srcElement.getAttribute("data-index"))    
    tasks.delete(index)
  }
})