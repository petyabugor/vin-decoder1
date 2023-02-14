import { Routes, Route } from 'react-router-dom';
import { Home, VariableId, Variables, PageNotFound } from './pages/index';
import './scss/app.scss';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';

function App() {
   const [searchValue, setSearchValue] = useState('');
   const [products, setProducts] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [valueFromButtonClick, setValueFromButtonClick] = useState();

   useEffect(() => {
      fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${valueFromButtonClick}?format=json`)
         .then((res) => res.json())
         .then((arr) => {
            setProducts(arr.Results);
            setIsLoading(false);
         })
         .catch((err) => {
            console.log(err);
         });
      window.scrollTo(0, 0);
   }, [valueFromButtonClick, searchValue]);

   return (
      <div className="wrapper">
         <Header />

         <Routes>
            <Route
               path="/vin-decoder"
               element={
                  <Home
                     products={products}
                     searchValue={searchValue}
                     setSearchValue={setSearchValue}
                     valueFromButtonClick={valueFromButtonClick}
                     setValueFromButtonClick={setValueFromButtonClick}
                  />
               }
            ></Route>
            <Route
               path="/variables/:VariableId"
               element={
                  <VariableId
                     isLoaded={isLoading}
                     products={products}
                     valueFromButtonClick={valueFromButtonClick}
                  />
               }
            ></Route>
            <Route
               path="/variables"
               element={
                  products &&
                  products.map((obj) => (
                     <Variables
                        key={obj.VariableId}
                        title={obj.Variable}
                        value={obj.Value}
                     ></Variables>
                  ))
               }
            ></Route>
            <Route
               path="/*"
               element={<PageNotFound />}
            />
         </Routes>
      </div>
   );
}

export default App;
