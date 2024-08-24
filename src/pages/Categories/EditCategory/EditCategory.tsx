/* eslint-disable @typescript-eslint/explicit-function-return-type */

import EditCategoryForm from "../../../components/Categories/EditCategoryForm/EditCategoryForm";
import Navbar from "../../../components/navbar/Navbar";
import styles from './EditCategory.module.css'


export default function EditCategory() {
  return (
    <div className={styles.editcategoryformbody}>
        <Navbar/>
        <EditCategoryForm/>
    </div>
  )
}
