/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

 class ClassCompo extends Component {
    constructor(props) {
      super(props)
    
      
      this.state = {
        count:0
      }
    }
    hendatCall = () => {
       const inc=  this.state.count+1
       this.setState({count:inc})
      console.log('hendatCall method called',this.state.count);
    };
    componentDidMount(){
        console.log('componentDidMounts called');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate called');
    }
    componentWillUnmount(){
        console.log("componentWillUnmount called");
    }
    
  render() {
    return (
      <div className='p-14 my-20 '>
          <h1>hello class components {this.state.count}</h1>
          <button onClick={()=>this.hendatCall()}  className='m-4 px-7 py-2 bg-main-red text-white rounded hover:bg-gray-600'>incriment</button>
      </div>
    )
  }
}

export default ClassCompo
