import css from './Products.module.css';
import AM36 from '../../../../assets/images/AM-36.png';  
import BewiMilk from '../../../../assets/images/bewi-milk.png';
import Normi from '../../../../assets/images/normi.png';
import Salesta from '../../../../assets/images/salesta.png';
import { ReactComponent as Cart } from '../../../../assets/svg/cart.svg';
import Button from '../../../../components/common/Button/Button';

export const products = [
  <div className={css.product}>
    <img src={AM36} alt="product" />
    <p className={css.title}>Млекозаместител за телета - BW-AM36</p>

    <hr className={css.hrDashed} />

    <p className={css.price}>28.50лв.</p>
    <Button className={css.customBtn}><Cart /> Купи</Button>
  </div>,

  <div className={css.product}>
    <img src={BewiMilk} alt="product" />
    <p className={css.title}>Млекозаместител за телета - BW-AM36</p>

    <hr className={css.hrDashed} />

    <p className={css.price}>28.50лв.</p>
    <Button className={css.customBtn}><Cart /> Купи</Button>
  </div>,

  <div className={css.product}>
    <img src={Salesta} alt="product" />
    <p className={css.title}>Млекозаместител за телета - BW-AM36</p>

    <hr className={css.hrDashed} />

    <p className={css.price}>28.50лв.</p>
    <Button className={css.customBtn}><Cart /> Купи</Button>
  </div>,

  <div className={css.product}>
    <img src={Normi} alt="product" />
    <p className={css.title}>Млекозаместител за телета - BW-AM36</p>

    <hr className={css.hrDashed} />

    <p className={css.price}>28.50лв.</p>
    <Button className={css.customBtn}><Cart /> Купи</Button>
  </div>,

  <div className={css.product}>
    <img src={AM36} alt="product" />
    <p className={css.title}>Млекозаместител за телета - BW-AM36</p>

    <hr className={css.hrDashed} />

    <p className={css.price}>28.50лв.</p>
    <Button className={css.customBtn}><Cart /> Купи</Button>
  </div>,

  <div className={css.product}>
    <img src={Normi} alt="product" />
    <p className={css.title}>Млекозаместител за телета - BW-AM36</p>

    <hr className={css.hrDashed} />

    <p className={css.price}>28.50лв.</p>
    <Button className={css.customBtn}><Cart /> Купи</Button>
  </div>,

  <div className={css.product}>
    <img src={BewiMilk} alt="product" />
    <p className={css.title}>Млекозаместител за телета - BW-AM36</p>

    <hr className={css.hrDashed} />

    <p className={css.price}>28.50лв.</p>
    <Button className={css.customBtn}><Cart /> Купи</Button>
  </div>
]