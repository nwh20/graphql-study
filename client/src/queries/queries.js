import gql from 'graphql-tag';

export const ADD_BOOK = gql`
  {
    authors {
      name
      age
      id
    }
  }
`;

export const BOOK_LIST = gql`
  {
    books {
      name
      genre
      id
    }
  }
`;

export const ADD_BOOK_MUTATION = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export const GET_BOOK = gql`
  query($id: ID) {
    book(id: $id) {
      name
      genre
      id
      author{
        id
        name
        age
        books{
          name
          id
        }
      }
    }
  }
`;