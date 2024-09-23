import css from './Menu.module.css';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useState } from 'react';
import { ReactComponent as MenuSvg } from '../../../assets/svg/menu.svg';
import { ReactComponent as ArrowBottom } from '../../../assets/svg/arrow-bottom.svg';
import { ReactComponent as Logo } from '../../../assets/svg/logo.svg';
import { ReactComponent as SearchIcon } from '../../../assets/svg/search-icon.svg';

type MenuItemsType = {
    title: string;
    url: string;
    submenu?: MenuItemsType[]
};

type Props = {
    menuItems: MenuItemsType[],
    type?: "primary" | "secondary"
}

const MenuItem = ({item}: {item: MenuItemsType}) => {
    return (
        <>
            {
                item.url ? (
                    <Link
                        className={css.menu_item}
                        to={item.url}
                    >
                        <span>{item.title}</span>
                    </Link>
                )
                :
                (
                    <Submenu title={item.title} items={item.submenu} />
                )
            }
        </>
    )
}

const Submenu = (props: {
    title: string;
    items: MenuItemsType[] | undefined
}) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    
    const onSubMenuClick = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    }

    return (
        <>
            <div className={css.submenu}>
                <span className={cn(css.menu_item, css.submenuTitle)} onClick={onSubMenuClick}>
                    {props.title}
                    <ArrowBottom className={css.rightIcon} />
                </span>
                <div className={cn(css.popup, { [css.subMenuOpen]: isSubMenuOpen })}>
                    <div className={css.submenuItems}>
                        {
                            props.items && props.items.map((item: MenuItemsType) => {
                                return (
                                    <MenuItem key={item.title} item={item}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

const Menu = ({menuItems, type} : Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <nav>
                <div className={`${css.navContent} ${type ? css[type] : css.primary}`}>
                    <Logo className={css.mobileLogo} />
                    <div className={cn(css.menu, { [css.menuOpen]: isMenuOpen })}>
                        <div className={cn({ [`container`]: isMenuOpen })}>
                            {
                                menuItems.map((item: MenuItemsType) => <MenuItem key={item.title} item={item}/>)
                            }
                        </div>
                    </div>
                    <div className={css.mobileTools}>
                        <SearchIcon className={css.searchIcon} />
                        <MenuSvg className={css.menuIcon} onClick={onMenuClick} />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Menu;