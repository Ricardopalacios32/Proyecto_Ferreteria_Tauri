/* eslint-disable @typescript-eslint/explicit-function-return-type */
import CategoryTable from '../../../components/Categories/CategoryTable/CategoryTable'
import Navbar from '../../../components/navbar/Navbar'
import { useInventory } from '../../../hooks/useInventory';
import styles from './CategoriesList.module.css'
import { Link } from 'react-router-dom';
import DataForm from '../../../components/ui/DataForm/DataForm';

export default function CategoriesList() {

  
  const { state } = useInventory();
  


  
  const categories = state.categories

  if(state.categories.length === 0) return (
    <div className={styles.categorytablecont}>
      <DataForm/>
    </div>
    
  )

  return (
    <div className={styles.categorytablecont}>
      <Navbar />  
      {state.auth === true &&  (
        <div className={styles.tablecontrolscont}>
        <Link to="/category/create" className={styles.createbutton}>Crear Categoria</Link>
      </div>
      )}
      
      <CategoryTable 
        categories={categories}
      />
    </div>
  )
}
