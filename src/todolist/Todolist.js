import React from "react";
class TodoList extends React.Component{
    constructor(){
        super();
        this.state={
            userInput:'',
            items: []
        }

    }
    onChange (event){
        this.setState({
            userInput: event.target.value
        }, ()=> console.log("this.state.userInput"));
        
    }
    addTodo (event){
        event.preventDefault();
        this.setState({
            userInput :'',  
            items:[...this.state.items, this.state.userInput]
            }, 
        );
    }
    deleteTodo(event){
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }
    renderTodos(){
        return this.state.items.map((item)=>{
            return (
                <div key={item}>
                    {item} | <button onClick={this.deleteTodo.bind(this)}>X</button>
                </div>
            );
        });
    }
    render(){
       return(
        <div>
            <form >
                <input value={this.state.usreInput} type="text"placeholder="renseignement" 
                   onChange={this.onChange.bind(this)}
                />
            <button onClick={this.addTodo.bind(this)}>ajouter</button>
            </form>
            <div>
                {this.renderTodos()}
            </div>   

        </div>
       )
    }
}
export default TodoList;