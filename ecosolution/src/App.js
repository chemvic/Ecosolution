import Header  from 'components/Header/Header';
import Hero  from 'components/Hero/Hero';
import './App.css';
import Values from 'components/Values/Values';
import Electricity from 'components/Electricity/Electricity';

 const App = () => {
  return (
    <div className="container">
     <Header/>
     <Hero/>
     <Values/>
     <Electricity value ="1.134.147.814"/>
    </div>
  );
};
export default App;

