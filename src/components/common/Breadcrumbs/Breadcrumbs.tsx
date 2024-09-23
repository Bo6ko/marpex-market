import css from './Breadcrumbs.module.css';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
    return (
        <ul className="container">
            <div className={css.breadcrumb}>
                <li><a href="#">Начало</a></li>
                <li><a href="#">Продукти за телета</a></li>
                <li><a href="#">Млекозаместители</a></li>
                <li><a href="#">Млекозаместител за телета - BW-AM36</a></li>
            </div>
        </ul>
    );
};

export default Breadcrumbs;