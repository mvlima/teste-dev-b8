import { IProduct } from '../typings';
import Add from './Add';
import Heart from './Heart';

interface Props {
  product: IProduct;
}

const Card = ({ product }: Props) => {
  return (
    <div className="product-card">
      <div className="product-content" key={product.id}>
        <Heart />

        <div className="product-image">
          <img src={product.photo} alt={product.name} width="auto" height="240" />
        </div>

        <div className="product-name">
          <p>{product.name}</p>
        </div>

        <div className="price-group">
          <div className="product-old-price">
            <p><s>{product.currency}{product.old_price.toFixed(2)}</s></p>
          </div>

          <div className="product-price">
            <p>{product.currency}{product.price.toFixed(2)}</p>
          </div>

          <div className="product-installments">
            <p>em até <b>{product.installments}x de {product.currency}{product.installments_price.toFixed(2)}</b> sem juros</p>
          </div>
        </div>

        <Add />
      </div>
    </div>
  )
}

export default Card
