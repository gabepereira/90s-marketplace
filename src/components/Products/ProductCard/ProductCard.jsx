import { Link } from 'react-router-dom';
import Card from '../../UI/Card';
import './styles.scss';

const ProductCard = ({
  data: { id, name, currency, price, image },
  mode = 'compact',
}) => {
  return (
    <div data-testid="ProductCard" className="product-card-wrapper">
      <Card className={`product-card ${mode}`}>
        <h1>{name}</h1>
        <p>
          {currency}
          {price}
        </p>

        <div>
          <img src={image} alt="Product" />
        </div>

        {mode === 'compact' && (
          <Link className="btn" to={`/products/${id}`}>
            View product
          </Link>
        )}
      </Card>
    </div>
  );
};

export default ProductCard;
