import React, { Component } from 'react';
import data from '../burgerqueen.json'
//import Result from './result.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusSquare,faTrashAlt,faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {Card,Table, TableBody} from 'mdbreact';
import '../css/Breakfast.css';
library.add(faPlusSquare,faTrashAlt,faPaperPlane)


class Breakfast extends Component {

  constructor() {
    super()
    this.state = 
    { operations: [], 
      total: 0 
      
    }

}

handleClick=(e)=> {
  
  const { value, name } = e.target;

  const array = this.state.operations
  console.log(this.state.operations)
  array.push({ type: name, price: value });

  this.setState({
                 
    prueba:value
    
});

}


render(){
 

return(
 
  <div className="row">
  <div className="col-6 col-sm-6 col-md-8">
  {data.Desayuno.map((item,i) => (
    
    <div  id="card" key={i}>

<Card>
<center>
<img src={item.url} alt={item.type} height="100" width="140"></img>
</center>
<p>{item.type}</p>
${item.price}

 <button onClick={this.handleClick}  name={item.type} value={"$"+item.price} type="button" className="btn btn-primary "><FontAwesomeIcon icon="plus-square" /></button>
</Card>

 
  </div>
   
))}
   
   </div>

  <div id="card2" className="col-6 col-sm-6 col-md-4">
  <div id="input">

<label for="exampleForm2">Nombre cliente</label>
<input type="text" id="exampleForm2" className="form-control"/>

</div>  
 {this.state.operations.map((menu, i) => {
  return (
   
  <div id="card3" key={i}>

<Table>

  
      
      <TableBody>
        <tr>
       <td width="200"  pr-1>{menu.type}</td>
        <td width="200" >{menu.price}</td>
        <td width="200" ><button type="button" className="btn btn-primary btn-sm "><FontAwesomeIcon icon="trash-alt" /></button></td>
        </tr>
       
       
      </TableBody>
    </Table>


  </div>
  )

})}

  <div id="card4">
 <Table>
 <TableBody>
 <tr>
          <td width="200" >Total</td>
          <td width="200" ><b>$</b></td>
          <td width="200" ></td>
        </tr>
        <tr>
          <td width="200" ></td>
          <td><button type="button" className="btn btn-primary ">Enviar a cocina  <FontAwesomeIcon icon="paper-plane" /></button></td>
          <td width="200" ></td>
         
        </tr>

</TableBody>
</Table>
</div>
</div>
</div>

);






}
}


export default Breakfast;


