import './SimilarProductsSlider.css';
import AliceCarousel from 'react-alice-carousel';
import { useState } from 'react';
import { products } from './ProductsArray/Products';

const SimilarProductsSlider = () => {
  const [productsSlide, setProductsSlide] = useState<JSX.Element[]>(products);

  return (
    <>
      <div className="similar-products">
        <h2>Млекозаместители</h2>

        <AliceCarousel
          mouseTracking
          disableDotsControls
          // infinite
          items={productsSlide}
          responsive={{
            320: {
              items: 1,
              itemsFit: 'contain',
            },
            768: {
              items: 3,
              itemsFit: 'contain',
            },
            1200: {
              items: 6,
              itemsFit: 'contain',
            }
          }}
        />
      </div>
    </>
  );
};

export default SimilarProductsSlider;