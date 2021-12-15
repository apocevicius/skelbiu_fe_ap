import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import NewListingForm from './../components/NewListing';


function HomePage() {
  return (
    <div>
      <Header />
      
      <NewListingForm />
      <Footer />
    </div>
  );
}

export default HomePage;
