import css from './Header.module.css';
import Menu from '../../common/Menu/Menu';
import { MenuItems } from './MenuItems';
import { MenuProductsItems } from './MenuProductsItems';
import { ReactComponent as Logo } from '../../../assets/svg/logo.svg';
import Search from '../search/Search';
import { ReactComponent as ShopingCart } from '../../../assets/svg/shopingCart.svg';
import { ReactComponent as Heart } from '../../../assets/svg/heart.svg';
import { ReactComponent as UserIcon } from '../../../assets/svg/userIcon.svg';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import { ReactComponent as PhoneIcon } from '../../../assets/svg/phone-icon.svg';

const Header = () => {
  return (
    <>
      <div className={css.mainMenu}>
        <div className={`container ${css.mainMenuSection}`}>
          <Menu menuItems={MenuItems} type="secondary"/>
          <div className={css.phone}>
            <PhoneIcon /> <span>0895502266</span>
          </div>
        </div>
      </div>
      <header className={`container ${css.header}`}>
        <div className={css.middleNav} >
          <Logo />
          <Search />
          <div className={css.userToolIcons}>
            <ShopingCart />
            <Heart />
            <UserIcon />
          </div>
        </div>
        <Menu menuItems={MenuProductsItems}/>
      </header>

      <Breadcrumbs />
    </>
  );
};

export default Header;