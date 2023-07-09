import ProductCard from "../../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ItemList;
