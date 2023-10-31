import { ChangeEvent, useContext, useState } from 'react';
import { changeName } from '~/actions/user';
import { AppContext } from '~/context';

export const User = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { state, dispatch } = useContext(AppContext);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeName(target.value));

  return (
    <div>
      <span>User name: {state.user.name}</span>{' '}
      <button onClick={() => setIsOpen(!isOpen)}>Alterar nome</button>
      {isOpen && <input value={state.user.name} onChange={handleChange} />}
    </div>
  );
};
