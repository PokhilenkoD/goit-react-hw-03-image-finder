import { Formik } from 'formik';
import { ButtonSearch, Header, Input, SearchForm } from './SearchBar.styled';
import { BsSearch } from 'react-icons/bs';

export const SearchBar = ({ onSubmit }) => {
  return (
    <Header>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={(values, actions) => {
          onSubmit(values);
          actions.resetForm();
        }}
      >
        <SearchForm>
          <ButtonSearch type="submit">
            <span>
              <BsSearch />
            </span>
          </ButtonSearch>

          <Input
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </Header>
  );
};
