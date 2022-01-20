import { Btn } from './Button.styled';

export default function Button({ children, onClick }) {
  return <Btn onClick={onClick}>{children}</Btn>;
}
