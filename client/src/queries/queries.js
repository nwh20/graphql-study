import gql from 'graphql-tag';

export const ADD_BOOK = gql`
  {
    authors {
      name
      id
    }
  }
`;

export const BOOK_LIST = gql`
  {
    books {
      name
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