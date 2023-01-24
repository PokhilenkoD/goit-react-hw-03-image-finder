import { LoadeMoreBtn } from './Button.styled';

export const Button = ({ nextPage }) => {
  return (
    <LoadeMoreBtn type="button" onClick={nextPage}>
      Loade more
    </LoadeMoreBtn>
  );
};
