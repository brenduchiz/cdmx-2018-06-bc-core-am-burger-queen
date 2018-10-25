import React , { Component } from 'react';


class Result extends  Component {  

    constructor(props) {
        super(props);
        this.state = { };
      console.log(this.props.order.operations)
      }

render(){ 
    
return(<div>

hola
  {this.props.order.operations.map((item,i) => (
    <div key={i}>{item.type}</div>
  ))}
                


</div>);   

}



}


export default Result;