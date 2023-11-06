import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    console.log(id);

    const fetchProduct = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.log(error)) 
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    return (
        <div>
            <ItemDetail itemSelected={product}/>
        </div>
    )
}

export default ItemDetailContainer;