import {
  PageHeader,
  SearchForm,
  SearchButton,
  ButtonLabel,
  SearchInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const description = e.target.elements.description.value;
    // console.log(description);
    onSubmit(description);
    e.target.reset();
  };

  return (
    <PageHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </SearchButton>

        <SearchInput
          type="text"
          name="description"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </PageHeader>
  );
};