import ProductsSlider from './products-slider/ProductsSlider';
import css from './ProductSection.module.css';
import { ReactComponent as Star } from '../../../assets/svg/star.svg';
import Bucket1 from '../../../assets/images/bucket1.png';
import Bucket2 from '../../../assets/images/bucket2.png';
import { ReactComponent as Cart } from '../../../assets/svg/cart.svg';
import EasyOrdering from '../../../components/elements/EasyOrdering/EasyOrdering';

const ProductSection = () => {
  return (
    <div className={css.product}>
      <div className={css.mobile}>
        <p className={css.artNumber}>Арт. №: 310001750</p>
        <h2 className={css.productName}>Млекозаместител за телета - BW-AM36</h2>
        <p className={css.comments}><Star /> <Star /> <Star /> <Star /> <Star /> 12 отзива</p>
      </div>

      <ProductsSlider />

      <div className={css.description}>
        <div className={css.desktop}>
          <p className={css.artNumber}>Арт. №: 310001750</p>
          <h2 className={css.productName}>Млекозаместител за телета - BW-AM36</h2>
          <p className={css.comments}><Star /> <Star /> <Star /> <Star /> <Star /> 12 отзива</p>
        </div>
        <p className={css.productDesc}>
          Млекозаместител / сухо мляко за отглеждане на телета - пълноценен фураж.<br/>
          Качество от BEWI-MILK®.<br/>
          Произход: Германия.<br/><br/>
          Само за хранене на телета на възраст до 6 месеца.Разтворете 140-160гр. мляко заместител на литър топла вода (макс. 45 градуса по Целзий).
        </p>
        
        <hr className={css.hr} />

        <div className={css.chooseOption}>
          <div>
            <p className={css.optionRequest}>ИЗБЕРЕТЕ ВАРИАНТ</p>
            <strong className={css.options}>Без капак</strong>
          </div>
          <div className={css.chooseOptionIcons}>
            <img src={Bucket1} alt="bicket1" />
            <img src={Bucket2} alt="bicket2" />
          </div>
        </div>

        <hr className={css.hr} />

        <div className={css.cartSection}>
          <div className={css.price}>
            <p className={css.optionRequest}>ЦЕНА:</p>
            <strong className={css.options}>185,00лв.</strong>
          </div>

          <hr className={css.hrDashedMobile} />

          <button 
            className={css.cartBtn}
            onClick={() => alert('Продуктът е добавен в количката')}
          >
            <Cart /> Добави в количката
          </button>
        </div>

        <EasyOrdering />

      </div>
    </div>
  );
};

export default ProductSection;