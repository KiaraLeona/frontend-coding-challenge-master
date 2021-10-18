import './App.css';

import { BookStoreList } from './components/bookStoreList';
import { getBookStoreList } from './dataHelper';
import { useEffect, useState } from 'react';


function App() {
  
  const [bookStores, setBookStores] = useState([]);

  async function fetchBookStores() {
    fetch('http://localhost:3000/stores')
    .then(res => res.json())
    .then(data => {
      setBookStores( getBookStoreList(data) );
    })
    .catch(err => console.log(err.message))
  }  
  
  useEffect(() => {
      fetchBookStores();
  }, []);
  
  return (
    <>
    {bookStores && bookStores.length > 0 && 
      <BookStoreList bookStores={bookStores}></BookStoreList>
    }
    </>
  );
}

export default App;
