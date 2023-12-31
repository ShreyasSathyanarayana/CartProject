import { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import { addCart } from "./redux/slice/cardslice";
import { data } from "./Data";
// import defa from "C:\Users\sathy\Documents\GitHub\CartProject\src\default-pic.jpg"
import des from "../default-pic.jpg"
import './CartList.css'
function CartList(){
    const [datas,setDatas]=useState(null);
    // const state = useSelector(state=>state);
    // console.log("cart -list state value on update",state)
    
    // useEffect(()=>{
    //     fetch("https://fakestoreapi.com/products")
    //     .then((data)=>data.json()).then((data)=>setData(data))
    //     .catch((err)=>alert("please check your internet "+err))
    // },[]);
    // console.log(data)
    useEffect(()=>{
       if(!localStorage.getItem("cart-item")){
           localStorage.setItem("cart-item",JSON.stringify(data));
           const value = localStorage.getItem("cart-item")
          const json =JSON.parse(value)
          console.log(...data)
          setDatas(json)
       }
       else{
        const value = localStorage.getItem("cart-item")
       const json =JSON.parse(value)
       console.log(...data)
       setDatas(json)
       }
       
    },[])

    if(!data){
        return(
            <h1>Data is loading</h1>
        )
    }
    return(
        <div className="card-list">
            {
              datas&& datas.map((item,index)=><Item  title={item.title} price={item.price} description={item.description?item.description:null} image={item.image} index={index}/>)
            }  
        </div>
    )
}

export default CartList;


export function Item({id,title,price,description,image,index}){

    const dispatch = useDispatch();
    const [isExpanded, setIsExpanded] = useState(false);
    const [decrementbtn,setDecrementbtn] =useState(true);
    const [quantity,setQuantity]=useState(0);
    const maxCharCount=100;
    useEffect(()=>{
        checkValue()
    },[quantity]);

    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    };  

    const checkValue = ()=>{
        if(quantity!==0){
            setDecrementbtn(false)
            return;
        }
        setDecrementbtn(true);
        return;
    }
    const increment = ()=>{
        console.log("before increment",quantity);
        setQuantity(quantity+1); 
        console.log("After increment",quantity)      
    }
    const decrement = () =>{
        setQuantity(quantity-1);
    }
    const addData =(id,title,price,description,image,quantity)=>{
        console.log("add to cart clicked")
        dispatch(addCart({id:id,title:title,price:price,description:description,image:image,quantity:quantity}))
    }

    const displayText = isExpanded ? description : `${description.slice(0, maxCharCount)}...`;
    return(
        <div className="card" style={{width: "60%%",padding:"2%"}}>
            <img src={image?image:des} className="card-img-top p-5" alt="..." height={"50%"}></img>
            <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <p style={{marginBottom:"0",fontSize:"80%"}}  >{displayText}</p>
                {description.length > maxCharCount && (
                <p onClick={toggleReadMore} className="text-primary text-end read-more">
                     {isExpanded ? 'Read Less' : 'Read More'}
                </p>
                )}
                <p style={{fontSize:"80%"}}>Price: ₹<span className="text-danger">{price}</span></p>
                <p style={{fontSize:"80%"}}>Quantity:<div className="btn-group ms-5" role="group" aria-label="Basic mixed styles example">
                            <button type="button" className="btn btn-danger" onClick={decrement} disabled={decrementbtn} >-</button>
                            <p className="mb-0 p-1 pt-2">{quantity}</p>
                            <button type="button" className="btn btn-success" onClick={increment}>+</button>
                            </div>
                </p>
                <button className="btn btn-primary" disabled={decrementbtn}onClick={()=>addData(id,title,price,description,image,quantity)}>Add to Cart</button> 
            </div>
        </div>
    )
}