import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { BsCart, BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useOnClickOutside } from 'shared/lib';

import cartData from './data';

import styles from './styles.module.scss';

interface Props {
  isActive: boolean;
  toggleActive: () => void;
  onClose: () => void;
  className?: string;
}

function Cart(props: Props) {
  const { isActive, toggleActive, onClose, className = '' } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState(cartData);

  useOnClickOutside(containerRef, onClose);

  const countTotalPrice = () => {
    let total = 0;
    total = products.reduce(
      (prev, cur) => prev + cur.price * cur.quantity,
      total
    );

    return total;
  };

  const handleRemoveFromCart = (productId: number) => {
    setProducts((prev) => prev.filter((item) => item.id !== productId));
  };
  const handleResetCart = () => setProducts([]);

  useEffect(() => {
    if (matchMedia('screen and (max-width: 768px').matches) {
      if (isActive) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
  }, [isActive]);

  return (
    <div
      className={classNames(styles.cart, className, {
        [styles.cartActive]: isActive,
      })}
      ref={containerRef}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className={styles.cartButton}
        type="button"
        onClick={toggleActive}
      >
        <BsCart className={styles.cartIcon} />
      </button>
      <div className={styles.cartContainer}>
        <div className={styles.cartContent}>
          <h2 className={styles.cartTitle}>Your Cart</h2>
          {products.length ? (
            <>
              <ul className={styles.cartProducts}>
                {products.map((item) => (
                  <li className={styles.product} key={item.id}>
                    <div className={styles.productImageWrapper}>
                      <img
                        className={styles.productImage}
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                    <div className={styles.productInfo}>
                      <div className={styles.productHeader}>
                        <h3 className={styles.productTitle}>{item.title}</h3>
                        <span className={styles.productPrice}>
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                      <div className={styles.productAdditions}>
                        <div>
                          <div className={styles.productOptions}>
                            <span className={styles.productOption}>
                              {item.color}
                            </span>
                            <span className={styles.productOption}>
                              {item.size}
                            </span>
                          </div>
                          <span className={styles.productQuantity}>
                            x{item.quantity}
                          </span>
                        </div>
                        <button
                          className={styles.productButton}
                          type="button"
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          <BsTrash className={styles.productIcon} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <p className={classNames(styles.subtotal, styles.cartSubtotal)}>
                Subtotal
                <span className={styles.subtotalPrice}>
                  ${countTotalPrice().toFixed(2)}
                </span>
              </p>
              <div className={styles.cartButtons}>
                <button
                  className={classNames(
                    styles.cartActionButton,
                    styles.cartActionButtonReset
                  )}
                  type="button"
                  onClick={handleResetCart}
                >
                  Reset cart
                </button>
                <Link
                  className={styles.cartActionButton}
                  to="/cart"
                  onClick={toggleActive}
                >
                  View Cart
                </Link>
              </div>
            </>
          ) : (
            <div className={styles.empty}>
              <div className={styles.emptyIconWrapper}>
                <BsCart
                  className={classNames(styles.cartIcon, styles.emptyIcon)}
                />
              </div>
              <h3 className={styles.emptyMessage}>There&apos;s no items yet</h3>
              <Link
                className={classNames(
                  styles.cartActionButton,
                  styles.emptyButton
                )}
                to="/shop"
                onClick={toggleActive}
              >
                Go Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
