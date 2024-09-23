import { useState } from 'react';
import './ProductsSlider.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import AM36 from '../../../../assets/images/AM-36.png';
import BewiMilk from '../../../../assets/images/bewi-milk.png';
import Normi from '../../../../assets/images/normi.png';
import Salesta from '../../../../assets/images/salesta.png';

const ProductsSlider = () => {

  const [productsSlide, setProductsSlide] = useState<JSX.Element[]>([
    <div><img src={AM36} alt="product N: ..." /></div>,
    <div><img src={BewiMilk} alt="product N: ..." /></div>,
    <div><img src={Normi} alt="product N: ..." /></div>,
    <div><img src={Salesta} alt="product N: ..." /></div>,
    <div><img src={BewiMilk} alt="product N: ..." /></div>
  ]);

  return (
    <div className="product-slider">
      <AliceCarousel 
        mouseTracking 
        // infinite
        items={productsSlide} 
        responsive={{
          1500: {
            items: 1,
            itemsFit: 'contain',
          }
        }}
      />
    </div>
  );
};

export default ProductsSlider;