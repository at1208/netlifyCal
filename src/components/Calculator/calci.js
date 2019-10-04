import React, { Component }from 'react';
import './calci.css';
import Fade from 'react-reveal/Fade';
import Button from "../Button/Button";
import Input from "../Input/Input";
import ClearButton from "../ClearButton/ClearButton";


class Calsi extends Component {

  state = {
    input: '0',
    operator: '',
    prevNumber: '',
    currNumber: '',

    DARK: false,
    LIGHT: true,

    Scientific: false

  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  addZeroToInput = val => {

  if (this.state.input !== "") {
    this.setState({ input: this.state.input + val });
  }
};

clearInput = () => {
  this.setState({ input: "" });
};

add = () => {
  this.state.prevNumber = this.state.input;
  this.setState({ input: "" });
  this.state.operator = "plus";
};

subtract = () => {
  this.state.prevNumber = this.state.input;
  this.setState({ input: "" });
  this.state.operator = "subtract";
};

multiply = () => {
  this.state.prevNumber = this.state.input;
  this.setState({ input: "" });
  this.state.operator = "multiply";
};

divide = () => {
  this.state.prevNumber = this.state.input;
  this.setState({ input: "" });
  this.state.operator = "divide";
};

evaluate = () => {
  this.state.currNumber = this.state.input;

  if (this.state.operator == "plus") {
    this.setState({
      input: parseInt(this.state.prevNumber) + parseInt(this.state.currNumber)
    });
  } else if (this.state.operator == "subtract") {
    this.setState({
      input:  parseInt(this.state.prevNumber) - parseInt(this.state.currNumber)
    });
  } else if (this.state.operator == "multiply") {
    this.setState({
      input:  parseInt(this.state.prevNumber) * parseInt(this.state.currNumber)
    });
  } else if (this.state.operator == "divide") {
    this.setState({
      input: parseInt(this.state.prevNumber) / parseInt(this.state.currNumber)
    });
  }
};






  render(){
console.log(this.state.Scientific)
if(this.state.LIGHT){

  return <div className=' a1'>

                  <Fade bottom>
                     <h1 className='text-center c2'>Calculator</h1>
                  </Fade>

                  <Fade bottom>
                     <div className='container text-center'>

                              <Fade bottom>
                                 <button className='btn a6' onClick={() => this.setState({ DARK: false, LIGHT: true})}>Light Theme</button>
                              </Fade>
                              <Fade bottom>
                                 <button className='btn a5' onClick={() => this.setState({ DARK: true, LIGHT: false})}>Dark Theme</button>
                                 <div className=' container a11  text-center'>
                                    <button className='  btn a7' onClick = {() => this.setState({ Scientific: true })}>Scientific Mode</button>
                                    <button className='a7'  >+/-</button>
                                    <button className='a7'  >x2</button>
                                    <button className='a7'  >√x</button>

                                 </div>
                              </Fade>



                     </div>
                  </Fade>

                   <div className='a3 container'>
                              <Fade bottom>
                                 <div className='a4 container shadow text-center'>

                              <Input>{this.state.input}</Input>
                                 </div>
                              </Fade>

                              <Fade bottom>
                                 <div className='row'>
                                  <Button className='a2 text-center btn ' handleClick={this.addToInput}>1</Button>
                                  <Button className='a2 text-center btn ' handleClick={this.addToInput} >2</Button>
                                  <Button className='a2 text-center btn ' handleClick={this.addToInput} >3</Button>
                                  <Button className='a2 text-center btn ' handleClick={this.add}>+</Button>
                                 </div>
                             </Fade>

                           <Fade bottom>
                               <div className='row'>
                                  <Button className='a2 text-center btn ' handleClick={this.addToInput} >4</Button>
                                  <Button className='a2 text-center btn ' handleClick={this.addToInput} >5</Button>
                                  <Button className='a2 text-center btn ' handleClick={this.addToInput} >6</Button>
                                  <Button className='a2 text-center btn ' handleClick={this.subtract} >-</Button>
                               </div>
                           </Fade>

                           <Fade bottom>
                              <div className='row'>
                                <Button className='a2 text-center btn '  handleClick={this.addToInput}>7</Button>
                                <Button className='a2 text-center btn '  handleClick={this.addToInput}>8</Button>
                                <Button className='a2 text-center btn '  handleClick={this.addToInput}>9</Button>
                                <Button className='a2 text-center btn '  handleClick={this.multiply}>*</Button>
                              </div>
                           </Fade>

                          <Fade bottom>
                            <div className='row'>
                               <ClearButton className='a2 text-center btn ' handleClear={this.clearInput}>Clear</ClearButton>
                               <Button className='a2 text-center btn ' handleClick={this.addZeroToInput}>0</Button>
                               <Button className='a2 text-center btn ' handleClick={this.evaluate}>=</Button>
                               <Button className='a2  text-center btn ' handleClick={this.divide}>/</Button>
                            </div>
                          </Fade>
                   </div>
     </div>

}

 else return <div className=' c1'>

           <Fade bottom>
              <h1 className='text-center c3'>Calculator</h1>
          </Fade>


          <Fade bottom>
                <div className='container text-center'>
                      <Fade bottom>
                        <button className='btn a8' onClick={() => this.setState({ DARK: false, LIGHT: true})}>Light Theme</button>

                        <button className='btn a9' onClick={() => this.setState({ DARK: true, LIGHT: false})}>Dark Theme</button>
                        <Fade bottom>

                          <div className='container a11  text-center'>
                          <button className='float-right btn a7' onClick = {() => this.setState({ Scientific: true })}>Scientific Mode</button>
                          <button className='  a7 a12'  >+/-</button>
                          <button className='   a7 a12'  >x2</button>
                          <button className='   a7 a12'  >√x</button>
                          </div>

                        </Fade>
                      </Fade>


                </div>
        </Fade>
<Fade bottom>
             <div className='a3 container'>
                   <Fade bottom>
                     <div className='a4 container shadow text-center'>
                     <Input>{this.state.input}</Input>
                      </div>
                   </Fade>

                    <Fade bottom>
                       <div className='row'>
                        <Button className='a2 text-center  ' handleClick={this.addToInput} >1</Button>
                        <Button className='a2 text-center  ' handleClick={this.addToInput} >2</Button>
                        <Button className='a2 text-center '  handleClick={this.addToInput}>3</Button>
                        <Button className='a2 text-center '  handleClick={this.add}>+</Button>
                       </div>
                   </Fade>

             <Fade bottom>
                 <div className='row'>
                  <Button className='a2 text-center ' handleClick={this.addToInput} >4</Button>
                  <Button className='a2 text-center  ' handleClick={this.addToInput} >5</Button>
                  <Button className='a2 text-center '  handleClick={this.addToInput}>6</Button>
                  <Button className='a2 text-center '  handleClick={this.subtract}>-</Button>
                 </div>
             </Fade>

              <Fade bottom>
                 <div className='row'>
                  <Button className='a2 text-center '  handleClick={this.addToInput}>7</Button>
                  <Button className='a2 text-center ' handleClick={this.addToInput} >8</Button>
                  <Button className='a2 text-center  ' handleClick={this.addToInput} >9</Button>
                  <Button className='a2 text-center  ' handleClick={this.multiply}>*</Button>
                  </div>
               </Fade>

                 <Fade bottom>
                  <div className='row'>
                   <ClearButton className='a2 text-center  ' handleClear={this.clearInput}>Clear</ClearButton>
                   <Button className='a2 text-center  ' handleClick={this.addZeroToInput}>0</Button>
                   <Button className='a2 text-center  ' handleClick={this.evaluate}>=</Button>
                   <Button className='a2 text-center  ' handleClick={this.divide}>/</Button>
                  </div>
                 </Fade>

             </div>
</Fade>
    </div>
  }
}
export default Calsi;
