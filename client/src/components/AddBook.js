import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks';

import { ADD_BOOK, ADD_BOOK_MUTATION, BOOK_LIST } from '../queries/queries';

const AddBook = () => {
  const [state , setState] = useState({
    name: '',
    genre: '',
    authorId: ''
  });
  
  const { loading, error, data } = useQuery(ADD_BOOK);
  const [ addBook ] = useMutation(ADD_BOOK_MUTATION);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  const printAuthors = data.authors.map(author => {
    return (
      <option key={author.id} value={author.id}>{author.name}</option>
    )
  })

  const submitForm = e => {
    e.preventDefault();
    addBook({
      variables: {
        name: state.name,
        genre: state.genre,
        authorId: state.authorId
      },
      refetchQueries: [{ query: BOOK_LIST }]
    })
  }

  return(
    <form id="add-book" onSubmit={submitForm}>

      <div className="field">
        <label>Book Name</label>
        <input type="text" onChange={(e)=> setState({...state, name: e.target.value})} />
      </div>

      <div className="field">
        <label>Genre</label>
        <input type="text" onChange={(e)=> setState({...state, genre: e.target.value})} />
      </div>

      <div className="field">
        <label>Author</label>
        <select onChange={(e)=> setState({...state, authorId: e.target.value})}>
          <option>Select author</option>
          {printAuthors}
        </select>
      </div>

      <button>+</button>

    </form>
  );
}

export default AddBook;