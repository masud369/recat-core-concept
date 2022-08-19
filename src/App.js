import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

 const nayoks = ["Razzak","Joshim","Iliees k","Manna","Salmansha","Sakib"];
  const productData = [
    {name:"photoshop",price:"$125",btn:"buynow"},
    {name:"photoshop2",price:"$225",btn:"buynow"},
    {name:"photoshop3",price:"$325",btn:"buynow"}
    
  ];
  return (
    
    <div className="App">
      <header className="App-header">

      <ul> 
        {nayoks.map(nayok=> <li>{nayok}</li>)}
        {productData.map(adobe=><li>{adobe.name}</li>)}
        {productData.map((product)=><Product info={product}></Product>)}
        <Counter></Counter>
      </ul>
       <Fetching></Fetching>
      <p>hello</p>
        
      </header>
    </div>

  )
}

//using fetch 
 function Fetching(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    console.log("it works")
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then((data)=>{return console.log(data), setUsers(data)})
  },[]);
  
  
  return (<div>
      {
        users.map((user)=>{return (<div><li>{user.username}</li>,<li>{user.email}</li></div>)})
      }
  </div>);
 }


//use of state
function Counter(){
  const [count,setCount] = useState(101); 
const countIncrease =()=>setCount(count+1);
const countDicrease =()=>setCount(count-1);


  return (<div>
    <h2>Count:{ " "+count}</h2>
    <button onClick={countIncrease}>increment</button>
    <button onMouseMove={countDicrease}>dicrement</button>
  </div>);
}


function Product(props){
const style = {
  backgroundColor:"gray",
  color:"black",
  width:"400px",
  height:"250px",
  marginTop:"10px"
}
const {name,price,btn} = props.info;
  return (<div style={style}>
    <h2>{name}</h2>
    <h4>{price}</h4>
    <p>{btn}</p>
  </div>);
} 


export default App;
