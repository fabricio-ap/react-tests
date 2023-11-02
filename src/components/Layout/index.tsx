import { Container } from './styles';

interface ContainerProps {
  children: React.ReactNode;
}

export function Layout({ children }: ContainerProps) {
  return <Container>{children}</Container>;
}
