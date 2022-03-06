import "./App.css";

import { MealsContextProvider } from "./Context/meals-context";
import Header from "./Components/UI/Header/Header";
import FeaturedImage from "./Components/Banners/FeaturedImage/FeaturedImage";
import Card from "./Components/UI/Card/Card";
import MealsMenu from "./Components/Meals/MealsMenu";

function App() {
  return (
    <MealsContextProvider>
      <Header />
      <FeaturedImage imgSrc="/meals.jpg" imgAlt="A table of food" />
      <main>
        <Card styleClass="card-featured">
          <h1>Delicious Food, Delivered to You</h1>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </Card>
        <Card styleClass="card-list">
          <MealsMenu />
        </Card>
      </main>
    </MealsContextProvider>
  );
}

export default App;
