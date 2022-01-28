import React, { Component, useState } from 'react';

/// Modifica el componente para que se puedan agregar tareas

// class App extends Component {
//   constructor(){
//     super()
//     this.addText = this.addText.bind(this)
//     this.pressEnter = this.pressEnter.bind(this)
//     this.state={
//        listAsk:['Sacar la ropa', 'Hacer la cama', 'Leer un rato'],
//        text:'',
//       }
//   }

//   addText(event){
//     // console.log(event.target.value)

//     this.setState({
//      text: event.target.value
//     });
    
//   }
//   pressEnter = (e) =>{
    
//     console.log(e.key)
//     if (e.keyCode === 13){
//       e.preventDefault()
//       console.log('You must have pressed Enter ')
//       return false;
//     }
//     return true
//   }

//   render() {
       
//     return (
//       <div className="wrapper">
//         <div className="list">
//           <h3>Por hacer:</h3>
//           <ul className="todo">
//             {/* <li>Sacar la ropa</li>
//             <li>Hacer la cama</li>
//             <li>Leer un rato</li> */}
//             {this.state.listAsk.map((el, id) => <li key={id}>{el}</li>)}
            
//           </ul>
//            <form>
//              <input type="text" onChange={this.addText} onKeyPress={this.pressEnter} id="new-task" placeholder="Ingresa una tarea y oprime Enter" />
//            </form>
//         </div>
//       </div>
//     )
//   }
// }

const App = () =>{

  const[text, setText] = useState('')
  const[listTask, setListTask]= useState(['Sacar la ropa', 'Hacer la cama', 'Leer un rato'])

 
     const pressEnter = (e) =>{
        console.log(e.key)
        if (e.key === 'Enter'){
          console.log('You must have pressed Enter ')
          let copyTask = [...listTask]
          copyTask.push(text)
          setListTask(copyTask)
          setText('')
        }
      
      }


  return (
    <div className="wrapper">
      <div className="list">
        <h3>Por hacer:</h3>
        <ul className="todo">
          {/* <li>Sacar la ropa</li>
          <li>Hacer la cama</li>
          <li>Leer un rato</li> */}
          {listTask.map((el, id) => <li key={id}>{el}</li>)}
                  
        </ul>
         <form onSubmit={(e) => e.preventDefault()}>
           <input type="text" value={text}  onChange={(e) => setText(e.target.value)} onKeyPress={pressEnter} id="new-task" placeholder="Ingresa una tarea y oprime Enter" />
         </form>
      </div>
    </div>
  )

}


export default App;
