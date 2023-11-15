import ItemCount from '../ItemCount/ItemCount'
import './styles.css'

const ItemDetail = ({ itemSelected }) => {
    return (
        <div>
            <h6 className='card-title'>{itemSelected?.title}</h6>
            <img src={itemSelected?.image} alt={itemSelected?.title} width={70} />
            <div>
                <p>{itemSelected?.description}</p>
            </div>

            <p>${itemSelected?.price}</p>
            <div>
                <p>Cantidad a comprar:</p>
                <ItemCount />
            </div>
        </div>
    )
}

export default ItemDetail