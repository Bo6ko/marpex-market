import css from './Search.module.css';
import { ReactComponent as SearchIcon } from '../../../assets/svg/search-icon.svg';
import Button from '../../common/Button/Button';

const Search = () => {
  return (
    <>
      <div className={css.search}>
        <SearchIcon />
        <input className={css.input} type='text' placeholder='Търсачка'/>
        <Button>Търси</Button>
      </div>
    </>
  );
};

export default Search;