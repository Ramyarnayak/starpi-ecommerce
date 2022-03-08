
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import { CartProvider} from "react-use-cart";
import NavBar from './components/Navbar';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './routes';
import '@brainhubeu/react-carousel/lib/style.css'
import Category from './components/Category';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

const Routes = () =>{
  const element = useRoutes(routes)
  return (
    <>
    <NavBar/>
    {element}
    <Category/>
    </>
  )
}

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <ApolloProvider client={client}>
      <Routes/>
    </ApolloProvider>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
