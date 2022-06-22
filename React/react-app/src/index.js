import React from 'react';
import ReactDOM from 'react-dom';
import MyReactDOM from './myReact/MyReactDom';
import './index.css';
import App from './App';
import MyReact from './myReact/MyReact'
import { CounterContextProvider } from './context/counterContext';
import { BuyStockContextProvider } from './context/BuyStockContext';
//import reportWebVitals from './reportWebVitals';

// UI = React(state)


const reactE = <section>
  <header>Counter:0</header>
  <button>+</button><button>-</button>
</section>;

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>
}

const data = {
  counter: 5,
  title: "Counter"
}


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      title: "Counter"
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSub = this.handleSub.bind(this);
    this.hanldeAlert = this.hanldeAlert.bind(this);

    console.log("THIS", this)
  }


  static getDerivedStateFromProps(props, state) {
    if (props.title) {
      return { ...state, title: props.title };
    }
    return state;
  }
  handleAdd() {
    // data.counter = data.counter + 1;
    // console.log(data)
    this.setState({
      counter: this.state.counter + 1
    })
  }
  handleSub() {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  hanldeAlert() {
    console.log('test')
    setTimeout(() => {
      alert(this.state.counter)
    }, 5000)
  }

  render() {
    // console.log("section", document.querySelector('section'))
    // console.log("STATE", this.state)
    return <section>
      {/* <header>{data.title}:{data.counter}</header> */}
      <header>{this.state.title}:{this.state.counter}</header>
      <Button onClick={this.handleAdd} >+</Button><Button onClick={this.handleSub}>-</Button>
      <Button onClick={this.hanldeAlert}>Alert after 5 s</Button>
      {/* <button>+</button><button>-</button> */}
    </section>;
  }
  componentDidMount() {
    //console.log("section", document.querySelector('section'))
  }
}

// console.log("Counter", Counter)
// console.log("<Counter/>", <Counter />)


ReactDOM.render(
  <CounterContextProvider>
    <App />
  </CounterContextProvider>

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// 

// let obj = { name: 'patrick', age: 18 };

// obj.age = 20; // mutable change  | reference is not changing

// let obj2 = obj;
// console.log(obj2 === obj); // true

// let obj2 = { ...obj, age: 20 } // imutable change | creating new reference



// let test;
// class Person {
//   constructor(name) {
//     this.name = name;
//     test = this;
//     console.log("in constructor", this)
//   }
// }

// const p = new Person();
// console.log("return by new", p)
// console.log("are they equal", p === test)

