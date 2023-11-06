import Item from "../Item/Item"
import './styles.css'

const ItemList = ({ productList }) => {
    return (
        <div className="item-list-container">
            {productList.map((product) => (
                <Item
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </div>
    );
};

export default ItemList;
