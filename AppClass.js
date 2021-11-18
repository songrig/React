import React from "react";
import "./App.css";

 class AppClass extends React.Component{
      state={
      inputValue:'inputValue',
      value2:'',
      width: window.innerWidth
      };
      onWindowResize = () => {
        this.setState({
      width: window.innerWidth
        })
      }
    
   
    componentDidMount(){
        document.title=this.state.inputValue;
       window.addEventListener ('resize',this.onWindowResize)
    }
    componentDidUpdate(){
        document.title=this.state.inputValue
    }
    componentWillUnmount(){
        window.removeEventListener ('resize',this.onWindowResize)
    }
    onInputValueChange=(e)=>{
      this.setState({
        inputValue:e.target.value
      })
    }
    onValue2Change=(e)=>{
      this.setState({
        value2:e.target.value
      })
    }
    render(){
      const {inputValue,value2,width} =this.state;
      return(
        <div style={{flex:1}}>
          AppClass Component
          <div>
            <input value={inputValue} onChange={this.onInputValueChange}/>
            <br/>
            <br/>
            <input value={value2} onChange={this.onValue2Change}/>
            <br/>
            <br/>
            <div>{width}</div>
          </div>
        </div>
      )
    }
  }
  
  export default AppClass;