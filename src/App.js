import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const person = {
    name: "Mahfuz",
    profession: "singer"
  }
  const person2 = {
    name: "Eva Rahman",
    upama: "Kokil konthi"
  }
  const style = {
    backgroundColor: "yellow",
    color: "blue"
  }

  const productsInfo = [
    {name:"photoshop",price:"$99.99",buy:"Buy now"},{name:"photoshop2",price:"$89.99",buy:"Buy now"}
  ]

  const clbrtyname = {naok:'Manna',naika:'Popi'}
  return (
    
    <div className="App">
      <header className="App-header">

        <p>This is first document of recat js</p>


      {/* <Product title={productsInfo[0].name} price={productsInfo[0].price} buy={productsInfo[0].buy}></Product> */}
      
      <Product product={productsInfo[1]} ></Product>

        <h2 className='' style={style}>Person name is {person.name + " and prefession is " + person.profession}</h2>
        <h4 style={{ color: "yellow", backgroundColor: "blue" }}>Person name is {person2.name + " and Upama is " + person2.upama}</h4>
        <PersonInfo></PersonInfo>
        <PersonInfo></PersonInfo>
        <PropsCheck Nyokname="Joshim" Nykaname="Shabana"></PropsCheck>
        <PropsCheck naok={clbrtyname.naok} nyka={clbrtyname.naika}></PropsCheck>
      </header>
    </div>

  )
}

//making product
 function Product(props){
  const style = {
    backgroundColor:"gray",
    color:"white",
    width:"400px",
    height:"400px",
    margin:"10px",
  }
  const {name,price,buy}= props.product;
  console.log(props);
  return (<div style={style}>
    <h2>{name}</h2>
    <h4>{price}</h4>
    <h2><a href="">{buy}</a></h2>
  </div>);
 }



//using props
function PropsCheck(props){
  return (
  <div><h2>Nayok Name is:{" "+ props.naok}</h2>
  <h4>Nayka Name is: {" "+ props.nyka}</h4> </div>
  );
}



const infoStyle = {
  color:"red",
  backgroundColor:"green"
}

function PersonInfo() {
  return (
    <div style={{color:"red",backgroundColor:"green",margin:"10px",padding:"10px"}} >
      <h2>Shakib al hasan</h2>
      <h4>No 1 all rounder in the world</h4>
    </div>
  );
}

export default App;
