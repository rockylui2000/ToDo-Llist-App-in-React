function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return <div className="todo" onClick={handle}>{todo.text} 
  <i class="fas fa-trash-alt"></i>
  </div>
}
