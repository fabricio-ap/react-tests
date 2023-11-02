interface ListProps {
  items: ListItemType[];
  render: (item: ListItemType) => React.ReactNode;
}

export type ListItemType = {
  title: string;
  [key: string]: string | number;
};

export function List({ items, render }: ListProps) {
  const hasCustomRender = !!render;

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{hasCustomRender ? render(item) : <p>{item.title}</p>}</li>
      ))}
    </ul>
  );
}
