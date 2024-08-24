import Navbar from "../../components/navbar/Navbar";
import AddProductForm from "../../components/Products/addProductForm/AddProductForm";
import style from './CreateProduct.module.css'


// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function CreateProduct() {
  return (
    <div className={style.addproductformbody}>
      <Navbar/>
      <AddProductForm/>
    </div>
    
  )
}
