import { ChangeEvent, useContext, useState } from 'react';
import { changeName } from '~/actions/user';
import { AppContext } from '~/context';
import { Wrapper } from './styles';

export const User = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    state: { user },
    dispatch,
  } = useContext(AppContext);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeName(target.value));

  return (
    <Wrapper>
      {!isOpen && <p>Nome: {user.name}</p>}

      {isOpen && <input value={user.name} onChange={handleChange} />}

      <button onClick={() => setIsOpen(!isOpen)}>
        {user.name ? 'Alterar nome' : 'Inserir nome'}
      </button>
    </Wrapper>
  );
};
