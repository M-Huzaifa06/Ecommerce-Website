import TestimonialSlider from "../components/TestimonialSlider";
import Collections from '../components/Collections';
import TrendingProducts from '../components/TrendingProducts';

const Home = () => {
  return (
    <div className="w-[90vw] mx-auto mb-5">
      <img src="https://bilalmarth7.pk/cdn/shop/files/Beige_Blue_Fashion_Photo_Collage_New_Collection_Blog_Banner.png?v=1769787001&width=1800" alt="" className='rounded-2xl'/>
      
      <Collections />

      <TrendingProducts />
  
      <TestimonialSlider />
    </div>
  );
};

export default Home;