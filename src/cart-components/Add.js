import { data } from "./Data";
import {useNavigate} from 'react-router-dom'
export function Add(){
  const history = useNavigate();
    const addData = ()=>{
         const name =document.getElementById("name").value;
         const description = document.getElementById("description").value;
         const price = document.getElementById("price").value;
         const datas ={
            title:name,
            description:description,
            price:price
         }
         const prevValue = JSON.parse(localStorage.getItem("cart-item"))
         localStorage.setItem("cart-item",JSON.stringify(prevValue?[...prevValue,datas]:[...data,datas]))
         history("/")
    }
    return(
        <div className="p-5">
  <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">Product Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp"></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    <input type="text" class="form-control" id="description"></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Price:</label>
    <input type="text" class="form-control" id="price"></input>
  </div>  
  <button type="submit" class="btn btn-primary" onClick={addData}>Submit</button>
        </div>
    )
}