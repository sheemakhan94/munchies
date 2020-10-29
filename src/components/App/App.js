import './App.css';
import logo from '../../assets/favicon.ico'
import Business from '../Business/Business.js'
import SearchBar from '../SearchBar/SearchBar.js'
import BusinessList from '../BusinessList/BusinessList';

function App() {
  return (
    <div className="App">
  <h1>munchr</h1>
  <SearchBar />
  <BusinessList />
</div>
  );
}

export default App;
