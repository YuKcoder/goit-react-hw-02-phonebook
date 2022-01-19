import { Btn } from './Button.styled';

export default function Button({ type, children, onClick }) {
  return (
    <Btn type={type} onClick={onClick}>
      {children}
    </Btn>
  );
}
