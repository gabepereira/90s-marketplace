import Card from '../../UI/Card';
import './styles.scss';

const ProductCard = ({ data: { name, price, image } }) => {
  return (
    <div data-testid="ProductCard" className="product-card-wrapper">
      <Card>
        <h1>{name}</h1>
        <p>{price}</p>

        <button onClick={() => console.warn('Not implemented!')}>
          Add to cart
        </button>

        <div>
          <img src={image} alt="Product" />
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
