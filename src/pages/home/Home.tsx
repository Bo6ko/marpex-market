import { lazy } from 'react';

const ProductSection = lazy(() => import('./ProductSection/ProductSection'));
const ProductAdditionalInfo = lazy(() => import('./ProductSection/ProductAdditionalInfo/ProductAdditionalInfo'));
const SimilarProductsSlider = lazy(() => import('./SimilarProducts/SimilarProductsSlider'));

const Home = () => {
  return (
    <div className='container'>
      <ProductSection />
      <ProductAdditionalInfo />
      <SimilarProductsSlider />
    </div>
  );
};

export default Home;