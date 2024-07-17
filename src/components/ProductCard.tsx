import { FaPlus } from "react-icons/fa";

interface ProductCardProps {
  productId: string;
  photo: {
    url: string;
    public_id: string;
  };
  name: string;
  price: number;
  stock: number;
  handler: () => void;
}

const ProductCard = ({
  productId,
  photo,
  name,
  price,
  stock,
  handler,
}: ProductCardProps) => {
  return (
    <div className="product-card">
      <img src={photo.url} alt={name} />
      <p>{name}</p>
      <span>${price}</span>
      <div>
        <button onClick={handler}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
