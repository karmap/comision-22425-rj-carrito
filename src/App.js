import './App.css';
import Cart from './components/cart/Cart';
import ItemList from './components/catalog/ItemList';

function App() {
  return (
    <div className="App">
      <h1>Mi tienda online</h1>
      <ItemList></ItemList>

      <Cart></Cart>
    </div>
  );
}

export default App;
