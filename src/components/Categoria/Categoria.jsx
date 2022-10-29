import { Link } from "react-router-dom"


export const Categoria = (props)=> {

    return(
        <div className="col mt-4">
            <div className="card" style={{width: '18rem'}}>
                <img src={props.info.imagen} className="card-img-top" alt="..." /> 
                <div className="card-body">
                    <h5 className="card-title">{props.info.nombre}</h5>
                    <p className="card-text">{props.info.descripcion}</p>
                    <Link className="btn btn-primary" to={props.info.nombre}>IR A PRODUCTOS</Link>
                    
                </div>
            </div>
        </div>
    )
}