import css from './Documents.module.css';
import { ReactComponent as DocIcon } from '../../../../../assets/svg/doc-icon.svg';
import { ReactComponent as DownloadIcon } from '../../../../../assets/svg/download-icon.svg';
import Button from '../../../../../components/common/Button/Button';

const Documents = () => {
  return (
    <div className={css.documents}>
      <div className={css.row}>
        <div className={css.docName}><DocIcon /> Гаранционна карта</div>
        <div className={css.download}>
          <span className={css.size}>154.51KB</span>
          <Button className={css.customBtn}><DownloadIcon /> Изтегли</Button>
          <DownloadIcon className={css.downloadIconMobile} />
        </div>
      </div>

      <hr className={css.hr} />

      <div className={css.row}>
        <div className={css.docName}><DocIcon /> Сертификат</div>
        <div className={css.download}>
          <span className={css.size}>102.73KB</span>
          <Button className={css.customBtn}><DownloadIcon /> Изтегли</Button>
          <DownloadIcon className={css.downloadIconMobile} />
        </div>
      </div>

      <hr className={css.hr} />

      <div className={css.row}>
        <div className={css.docName}><DocIcon /> Инструкции</div>
        <div className={css.download}>
          <span className={css.size}>208.62KB</span>
          <Button className={css.customBtn}><DownloadIcon /> Изтегли</Button>
          <DownloadIcon className={css.downloadIconMobile} />
        </div>
      </div>
    </div>
  );
};

export default Documents;