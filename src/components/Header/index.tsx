import { Layout } from '..';

interface HeaderProps {
  productName: string;
}

export function Header({ productName }: HeaderProps) {
  return (
    <Layout>
      <h4>{productName}</h4>
    </Layout>
  );
}
