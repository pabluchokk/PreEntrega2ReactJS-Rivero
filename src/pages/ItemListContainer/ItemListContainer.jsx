import { useEffect, useState } from "react";
import ItemList from "../../Components/ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
    const [productList, setProductList] = useState([]);

    const fetchProducts = () => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProductList(data))
        .catch((error) => console.log(error));    
};

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
    <div /* className="saludo" */>
        {/* {greeting} */}
        {productList.length > 0 ? (
            <ItemList productList={productList} />
        ) : (
            <p>Loading...</p>
        )}
    </div>
    );
};

export default ItemListContainer