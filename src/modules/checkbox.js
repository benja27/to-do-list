// /*eslint-disable */
export default class Checkbox {
  test() {
    this.check = document.querySelectorAll('.check');

    this.check.forEach((element, index) => {
      element.addEventListener('change', () => {
        const local = JSON.parse(localStorage.getItem('tasks'));

        const text = element.nextElementSibling;
        if (element.checked) {
          local[index].status = 'completed';
          text.style.textDecoration = 'line-through';
        } else if (!element.checked) {
          local[index].status = 'false';
          text.style.textDecoration = 'none';
        }
        localStorage.setItem('tasks', JSON.stringify(local));
        // console.log(local)
      });
    });
  }

  clean() {
    this.clean = document.querySelector('#clear-completed');
    // this.clean.addEventListener("click",e=>{
    const local = JSON.parse(localStorage.getItem('tasks'));
    const filtered = local.filter((elemento) => elemento.status === 'false');
    localStorage.setItem('tasks', JSON.stringify(filtered));
    // })
  }
}

// console.log(1233)