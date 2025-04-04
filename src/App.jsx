import React, {useState} from 'react'
// import Apple from './Apple'
// import './condition.css'
import Array from './Array'
import Without from './Orange'
import Crender from './Crender';  
import RegisterForm from './Form'

function App() { 
  // const [count, setCount]=useState(0);
  // const increment = ()=>{
  //   setCount(count+1);
  // } 
  // const decrement = ()=>{
  //   setCount(count-1);
  // }
  // const products = [{title:"product1"},
  //   {title:"product2"},
  //   {title:"product3"}];
  const products = [
    {
      id: 1,
      title: "Stylish Sunglasses",
      image: "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$25",
      description: "High-quality UV-protected stylish sunglasses."
    },
    {
      id: 2,
      title: "Leather Handbag",
      image: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$60",
      description: "Elegant leather handbag with a premium finish."
    },
    {
      id: 3,
      title: "Wireless Headphones",
      image: "https://images.pexels.com/photos/3394659/pexels-photo-3394659.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$120",
      description: "Noise-canceling wireless headphones with deep bass."
    },
    {
      id: 4,
      title: "Classic Watch",
      image: "https://images.pexels.com/photos/3783416/pexels-photo-3783416.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$80",
      description: "Stylish classic wristwatch with a leather strap."
    },
    {
      id: 5,
      title: "Running Shoes",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$50",
      description: "Comfortable and lightweight running shoes."
    },
    {
      id: 6,
      title: "Smartphone",
      image: "https://images.pexels.com/photos/3369484/pexels-photo-3369484.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$699",
      description: "Latest 5G smartphone with high-resolution camera."
    },
    {
      id: 7,
      title: "Gaming Laptop",
      image: "https://images.pexels.com/photos/3746941/pexels-photo-3746941.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$1200",
      description: "High-performance gaming laptop with RGB keyboard."
    },
    {
      id: 8,
      title: "Bluetooth Speaker",
      image: "https://images.pexels.com/photos/936123/pexels-photo-936123.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$45",
      description: "Portable Bluetooth speaker with deep bass."
    },
    {
      id: 9,
      title: "Digital Camera",
      image: "https://images.pexels.com/photos/1560383/pexels-photo-1560383.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$500",
      description: "Professional DSLR camera with high zoom lens."
    },
    {
      id: 10,
      title: "Fitness Tracker",
      image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$30",
      description: "Water-resistant fitness tracker with heart rate monitor."
    }
  ];
  

  return (
    <>
    
    <Crender/>
    
      {/* <h1 style={{margin:"10px"}} >Hello World!</h1> */}
      {/* <button onClick={increment}>Increment</button>
      {count}
      <button onClick={decrement}>Decrement</button> */}
    {/* <Apple name="shalini"/> */}
    {/* <Apple a={10} b={20} /> */}
    {/* <Apple products={products}/> */}
    <RegisterForm/>
    <Array products={products}/>
    <Without />
    
    </>
  )
}

export default App
