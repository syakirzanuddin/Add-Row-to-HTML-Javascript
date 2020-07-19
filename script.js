let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
 
 
let useridInput = document.querySelector('#userid');
let nameInput = document.querySelector('#name');
let occupationInput = document.querySelector('#occupation');
 
 
btnAdd.addEventListener('click', () => {
    let userid = useridInput.value;
    let name = nameInput.value;
    let occupation = occupationInput.value;
 
    let template = `
                <tr>
                    <td>${userid}</td>
                    <td>${name}</td>
                    <td>${occupation}</td>
                </tr>`;
 
    table.innerHTML += template;
});