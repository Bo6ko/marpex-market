import css from './AdditionalInfo.module.css';

const AdditionalInfo = () => {
  return (
    <div className={css.additionalInfo}>
      <div className={css.infoBox}>
        <p className={css.title}>Аналитични съставки</p>
        <ul className={css.ul}>
          <li>21,00% Суров протеин</li>
          <li>0,20% Сурови влакнини</li>
          <li>1,70% Лизин</li>
          <li>0,75% Калций</li>
          <li>17,00% Сурови мазнини</li>
          <li>0,70% Фосфор</li>
          <li>7,90% Сурова пепел</li>
          <li>0,70% Натрий</li>
        </ul>
      </div>

      <div className={css.infoBox}>
        <p className={css.title}>Хранителни добавки</p>
        <ul className={css.ul}>
          <li>25 000I.E. витамин А (3a672a)</li>
          <li>5.000I.E. витамин D3 (3a671)</li>
          <li>225 mg витамин Е (3a700)</li>
          <li>450 mg витамин С (3a300)</li>
          <li>100 mg желязо (желязо (II) хелат на глицин хидрат, 3b108)</li>
          <li>10 mg мед(мед (II) хелат на аминокиселиненхидрат, 3b406)</li>
          <li>37 mg цинк (цинков сулфат монохидрат, 3b605)</li>
          <li>30 mg манган (манганов (II) сулфат монохидрат, 3b605)</li>
          <li>0,45 mg йод (калциев йодат безводен, 3b202)</li>
          <li>0,25 mg селен (натриев селенит, 3b801 и селенометионин, произведени от Saccharomyces cerevisiae NCYC R397, 3b8.11)</li>
        </ul>
      </div>

      <div className={css.infoBox}>
        <p className={css.title}>Сензорни добавки</p>
        <ul className={css.ul}>
          <li>10 mg октанова киселина (2b08010)</li>
          <li>119 mg глицерил трибутират (2b09211)</li>
        </ul>
      </div>
    </div>

  );
};

export default AdditionalInfo;