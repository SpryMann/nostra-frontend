import productsData from './data';
import Product from './Product';

interface Props {
  className?: string;
}

function ProductsList(props: Props) {
  const { className = '' } = props;

  return (
    <div className={className}>
      {productsData.map((item) => (
        <Product
          key={item.id}
          path={item.path}
          image={item.image}
          title={item.title}
          price={item.price}
          oldPrice={item.oldPrice}
          isSale={item.isSale}
          colors={item.colors}
        />
      ))}
    </div>
  );
}

export default ProductsList;
