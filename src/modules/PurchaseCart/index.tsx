import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { addProduct, removeProduct } from '~/actions/purchaseCart';
import { List, ListItemType } from '~/components';
import { AppContext } from '~/context';
import { PurchaseCartItemType } from '~/reducer/purchaseCart';
import { Wrapper } from './styles';

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

  const {
    state: { purchaseCart },
    dispatch,
  } = useContext(AppContext);

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

  const handleRemoveProducts = (item: PurchaseCartItemType) => {
    dispatch(removeProduct(item));
  };

  const renderItem = (item: PurchaseCartItemType, type: 'ADD' | 'REMOVE') => (
    <div>
      <span>{item.title}</span>

      {type === 'ADD' && <button onClick={() => handleAddProducts(item)}>+</button>}
      {type === 'REMOVE' && <button onClick={() => handleRemoveProducts(item)}>-</button>}
    </div>
  );

  return (
    <>
      <h4>Lista de Produtos</h4>

      <Wrapper>
        <List
          items={products}
          render={(item: ListItemType) => renderItem(item as PurchaseCartItemType, 'ADD')}
        />
        <hr />

        {purchaseCart.length ? (
          <List
            items={purchaseCart}
            render={(item: ListItemType) => renderItem(item as PurchaseCartItemType, 'REMOVE')}
          />
        ) : (
          <div>Nenhum item adicionado</div>
        )}
      </Wrapper>
    </>
  );
}
