import { useContext } from "react";
import { InventoryContext } from "../context/inventoryContext";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useInventory = () =>{
    const context = useContext(InventoryContext)

    return context
}