import { Field, Form, Formik } from 'formik';

export const SearchBar = ({ onSubmit }) => {
  return (
    <header class="searchbar">
      <Formik
        initialValues={{ search: '' }}
        onSubmit={(values, actions) => {
          onSubmit(values);
          actions.resetForm();
        }}
      >
        <Form class="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <Field
            class="input"
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
};
