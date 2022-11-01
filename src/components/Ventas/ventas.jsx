
import React, {useState} from 'react'
import "./ventas.css";
import data from '../../mock-data.json'

export function Meta(){
    return{
        title: 'GeSoftCol - Consolidado de Ventas',
        description: ''
    }
}


export const Ventas = () => {

  const [registros, setRegistros] = useState(data);

  return (
    <main className="contenedor">
        <h1 className="heading">
            Consolidado de Ventas
        </h1>

        <div className='contenido'>
            <div className='consolidado'>
                    <h2>
                        Reporte de Ventas
                    </h2>

                    <div className='ventas-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Factura de Venta</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead> 

                                <tbody>
                                    { registros.map((registro) => (
                                        <tr>
                                            <td>{registro.fecha}</td>
                                            <td>{registro.id}</td>
                                            <td>{registro.valor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                    </div>
                </div>

                <aside className="consolidado">
                    <h3>
                        Consolidado de ventas
                    </h3>
                    <p>
                        Total: ${}
                    </p>
                </aside>
        </div>

    </main>
  )
}

export default Ventas

