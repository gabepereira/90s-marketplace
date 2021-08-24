import { useParams } from 'react-router';

const ProductPage = () => {
  const { id: productId } = useParams();

  console.log(productId);

  return (
    <section>
      <div>
        <h1>Product A</h1>
        <p>Price: 10 USD</p>

        <button onClick={() => console.warn('Not implemented!')}>
          Add to cart
        </button>

        {/* <div><img src={pictureA} width={640}/></div> */}
      </div>
    </section>
  );
};

export default ProductPage;
