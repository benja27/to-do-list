/* eslint-disable */

import { forEach } from "lodash"

let array = [
  { name: "do homework", },
  { name: "do workout", },
  { name: "go to school", },
  { name: "do homework", }
];

export default class Tasks {
  show(){
    array.forEach(element => {
      let container = document.querySelector('#list')
    let div = document.createElement('div')
    div.className = "d-flex justify-content-between px-4 align-items-center"
    let check = document.createElement('input')
    check.className=""
    check.setAttribute('type','checkbox')
    let h3 = document.createElement('h4')
    h3.className = "m-0 col-10"
    h3.textContent = `${element.name}`
    let dots = document.createElement('i')
    dots.className = "fa-solid fa-ellipsis-vertical"
    let fragment = document.createDocumentFragment()
    div.append(check,h3, dots)
    fragment.append(div)
    container.append(fragment)  
    });
  }
}







