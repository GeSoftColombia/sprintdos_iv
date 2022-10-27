import { Route, Routes } from "react-router-dom"
import { AddProducto } from "./components/AddProducto/AddProducto"
import { Inicio } from "./components/Inicio/Inicio"
import { AdminCategorias } from "./components/AdminCategorias/AdminCategorias"
import { ProductoCategoria } from "./components/ProductoCategoria/ProductoCategoria"
import { Carrito } from "./components/Carrito/Carrito"
import { CarritoCompras } from "./components/CarritoCompras/CarritoCompras"



export const Ruteos = () =>{

    return(
        <Routes>
            <Route path="/" element={<Inicio/>}></Route>
            <Route path="/nuevo" element={<AddProducto/>}></Route>
            <Route path="/Comidas" element={<ProductoCategoria />}></Route>
            <Route path="/Bebidas" element={<AdminCategorias name="Bebidas" id="20" />}></Route>
            <Route path="/Miscelaneas" element={<AdminCategorias name="Miscelaneas" id="30" />}></Route>
            <Route path="/MiCarrito" element={<CarritoCompras></CarritoCompras>}></Route>
        </Routes>
    )
}