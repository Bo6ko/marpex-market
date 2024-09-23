import { useState } from 'react';
import css from './ProductAdditionalInfo.module.css';
import cn from "classnames";
import AdditionalInfo from './AdditionalInfo/AdditionalInfo';
import Comments from './Comments/Comments';
import Documents from './Documents/Documents';

type activeTabType = "additionalInfoTab" | "commentsTab" | "documentsTab"

const ProductAdditionalInfo = () => {
  const [activeTab, setActiveTab] = useState<activeTabType>("additionalInfoTab");

  return (
    <div>
      <div className={css.productTab}>
        <button
          className={cn(css.tablinks, activeTab === "additionalInfoTab" && css.active)}
          onClick={() => setActiveTab("additionalInfoTab")}
        >
          Още информация
        </button>

        <button
          className={cn(css.tablinks, activeTab === "commentsTab" && css.active)}
          onClick={() => setActiveTab("commentsTab")}
        >
          Отзиви
        </button>

        <button
          className={cn(css.tablinks, activeTab === "documentsTab" && css.active)}
          onClick={() => setActiveTab("documentsTab")}
        >
          Други документи
        </button>
      </div>

      {activeTab === "additionalInfoTab" && <AdditionalInfo />}

      {activeTab === "commentsTab" && <Comments />}

      {activeTab === "documentsTab" && <Documents />}
    </div>
  );
};

export default ProductAdditionalInfo;