import Header from "./header/header";
import PageLayout from "./body/pagelayout";
import NewsSection from "./news_section/NewsSection";
import Footer from "./footer/Footer";


const Home = () => {
  return (
    <>
      <Header />
      <PageLayout />
      <NewsSection />
      <Footer />
    </>
  );
}

export default Home;