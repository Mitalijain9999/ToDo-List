const add=document.querySelector('.add');
const list=document.querySelector('.todos');
const search=document.querySelector('.search input');
// deleting
const del=document.querySelector('.my');


// adding in todo list function
const generateTemplate=(todo)=>{
    const html=`<li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="fas fa-trash-alt delete"></i>
            </li>
       
    `;
    list.innerHTML+=html;

}

add.addEventListener('submit',e=>{
    e.preventDefault();
    const todo=add.add.value.trim();
    
    // trim for removing space
    if(todo.length){
        generateTemplate(todo);
        add.reset();

    }
   

});

list.addEventListener('click',(e)=>{
    console.log(e.target);
if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
}
});

const filterToDos=(term)=>{
    //dont contain searched term
        Array.from(list.children)
            .filter((todo)=> !todo.textContent.toLowerCase().includes(term))
            .forEach((todo)=> todo.classList.add('filtered'));

        Array.from(list.children)
            .filter((todo)=> todo.textContent.toLowerCase().includes(term))
            .forEach((todo)=> todo.classList.remove('filtered'));

};
//keyup event
search.addEventListener('keyup',()=>{
    const term=search.value.trim().toLowerCase();
    filterToDos(term);
});