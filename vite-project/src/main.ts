import './style.css'


interface todo {
  title:string,
  isCompleted:boolean,
  readonly id:string
}

const todos:todo[]=[]
  const todocontainer = document.querySelector(".todocontainer") as HTMLDivElement
  
  const todoInput = document.getElementsByName("title")[0] as HTMLInputElement
  let formdata=document.getElementById("myform") as HTMLFormElement;


  formdata.onsubmit =(e)=>{
   e.preventDefault();
   const todo:todo={
    title:todoInput.value,
    isCompleted:false,
    id:String(Math.random()*1000)
   }

   todos.push(todo)
   todoInput.value=""
   renderTodo(todos) 
   console.log("🚀 ~ todos:", todos)
  }

  const generateTodoItem = (title: string, isCompleted: boolean, id: string) => {
    const todo: HTMLDivElement = document.createElement("div");
    todo.className="box";
    const checkBox: HTMLInputElement = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.checked = isCompleted
    checkBox.onchange=()=>{
      console.log("we are in onchaef")
      todos.find((item)=>{
        console.log("we are here",item)
        console.log("we are here",id)
        
        console.log("🚀 ~ todos.find ~ checkBox.checked:", checkBox.checked)
          if(Number(item.id) ===Number( id)) {
            item.isCompleted = checkBox.checked}
          
      })
      console.log("todos",todos)
    }
    console.log("id", id)
    const paragraph: HTMLParagraphElement = document.createElement("p");
    paragraph.innerText = title
    // Appending elements to the todo div
    todo.append(checkBox, paragraph);
    

    todocontainer.append(todo)
  }
  
  const renderTodo=(todos:todo[])=>{
    todocontainer.innerText=""
    todos.forEach((item)=>{
            generateTodoItem(item.title, item.isCompleted, item.id)
    })
  }


