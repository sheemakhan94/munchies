import './App.css';
import logo from '../../assets/favicon.ico'
import Business from '../Business/Business.js'
import SearchBar from '../SearchBar/SearchBar.js'
import BusinessList from '../BusinessList/BusinessList';

const business = {
  imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

const businesses = [business, business, business, business, business, business];

function App() {
  return (
    <div className="App">
  <h1>munchr</h1>
  <SearchBar />
  <BusinessList businesses={businesses}/>
</div>
  );
}

export default App;
