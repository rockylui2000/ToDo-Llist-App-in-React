// user input - includes validation
function TodoForm({addTodo}){
  const [value,setValue] = React.useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }
  
  return (
    <div className="input-icon">
    <form onSubmit={handleSubmit}>
    
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo... hit enter to add"
        onChange={e => setValue(e.target.value)}
      />
      <i class="fas fa-plus-circle"></i>
    </form>
    </div>
  )
  
  
}