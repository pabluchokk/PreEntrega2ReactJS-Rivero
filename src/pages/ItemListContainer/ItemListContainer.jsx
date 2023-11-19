import { useEffect, useState } from "react";
import ItemList from "../../Components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [productList, setProductList] = useState([]);

    const fetchProducts = () => {
        let url = "https://fakestoreapi.com/products";
        if (categoryId) {
            url += `/category/${categoryId}`;
        }
        console.log("coso")
        fetch(url)
        .then(response => response.json()) 
        .then((data) => setProductList(data))
        .catch((error) => console.error(error)  )
};

    useEffect(() => {
        console.log("holita")
        fetchProducts();
    }, [categoryId])

    useEffect(() => {
        console.log("Categoría actualizada:", categoryId);
    }, [categoryId]);

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