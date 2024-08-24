/* eslint-disable @typescript-eslint/explicit-function-return-type */

import AddCategoryForm from "../../../components/Categories/AddCategoryForm/AddCategoryForm";
import Navbar from "../../../components/navbar/Navbar";

import styles from './AddCategory.module.css'


export default function AddCategory() {
  return (
    <div className={styles.addcategoryformbody}>
      <Navbar/>
      <AddCategoryForm/>
    </div>
  )
}
