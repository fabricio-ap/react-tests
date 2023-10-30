import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '~/context';

type ProductType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export function Test() {
  const [products, setProducts] = useState<ProductType[]>([]);

  const { state, dispatch } = useContext(AppContext);

  console.log({ state });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products?limit=5');

    if (data) setProducts(data);
  };

  return (
    <div>
      <h4>Test</h4>

      <ul>
        {products.length ? (
          products.map((product) => (
            <li key={product.id}>
              {product.title} <button onClick={() => null}>add</button>
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}
