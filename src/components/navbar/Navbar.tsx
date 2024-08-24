/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { invoke } from '@tauri-apps/api/tauri';

import { toast, ToastContainer } from 'react-toastify'
import style from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { useInventory } from '../../hooks/useInventory';


// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Navbar() {

  const navigate = useNavigate()
  const {state, dispatch} = useInventory()

  const handleSave = async () => {
    
    const jsonInventory = JSON.stringify(state.products)
    const jsonCategories = JSON.stringify(state.categories)

    if(!jsonCategories || !jsonInventory){

      toast.error("Inventario no valido");

      return
    }

    const Jsondata = jsonCategories + jsonInventory

    try {

      const currentDate = new Date();
      
      const formattedDate = `${String(currentDate.getDate()).padStart(2, '0')}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getFullYear())}`;

      await invoke('create_file_on_desktop', { 
        filename: `${formattedDate}-inventario.json`, 
        content: Jsondata
      });
      console.log('Archivo creado en el escritorio');
    } catch (error) {
      console.error('Error al crear el archivo:', error);
    }

    toast.success('Archivo Creado Correctamente en el Escritorio')
  }

  const cerrarsesion = ()=>{
    dispatch({type : 'endSession'})
    navigate("/1")
  }
  

  return (
    <>
      <ToastContainer></ToastContainer>
      {state.auth ? (
      <nav className={style.navbar}>
        <ul>
          <li><Link to="/1">Inventario</Link></li>

          <li><Link to="/category">Categorias</Link></li>
         
          {state.products.length !== 0 && (
             <li className={style.admin} onClick={handleSave}>Guardar Inventario</li>
          )}
         
        </ul>
        <li className={style.admin} onClick={cerrarsesion} >Cerrar Sesion</li>
      </nav>
      ): (
        <nav className={style.navbar}>
        
        <ul>
          <li><Link to="/1">Inventario</Link></li>
        </ul>
        <div><Link className={style.admin} to="/auth">Modo Administrador</Link></div>
      </nav>

      )}
    </>
  )
}
