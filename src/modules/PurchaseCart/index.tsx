import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { addProduct } from '~/actions/purchaseCart';
import { AppContext } from '~/context';
import { PurchaseCartItemType } from '~/reducer/purchaseCart';

type ProductType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export function PurchaseCart() {
  const [products, setProducts] = useState<ProductType[]>([]);

  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products?limit=5');

    if (data) setProducts(data);
  };

  const handleAddProducts = (item: PurchaseCartItemType) => {
    dispatch(addProduct(item));
  };

  return (
    <div>
      <h4>Test</h4>

      <ul>
        {products.length ? (
          products.map((product) => (
            <li key={product.id}>
              {product.title} <button onClick={() => handleAddProducts(product)}>add</button>
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>

      <hr />

      <div>
        {state.purchaseCart.length ? (
          state.purchaseCart.map((item) => <div>{item.title}</div>)
        ) : (
          <div>Nenhum item adicionado ao carrinho</div>
        )}
      </div>
    </div>
  );
}
