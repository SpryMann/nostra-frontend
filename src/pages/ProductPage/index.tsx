import { ProductDescription } from 'entities/product';
import {
  ProductDetails,
  ProductDiscussions,
  ProductReviews,
  ProductsSlider,
} from 'features';
import { useState } from 'react';
import { Breadcrumbs, Tabs } from 'shared/ui';

import { detailsData, relatedProductsData, tabsData } from './data';

import styles from './styles.module.scss';

function ProductPage() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="container">
      <Breadcrumbs className={styles.productBreadcrumbs} />
      <ProductDetails className={styles.productSection} />
      <Tabs
        className={styles.productTabs}
        activeIndex={activeTabIndex}
        setActiveIndex={(newIndex: number) => setActiveTabIndex(newIndex)}
        tabClassName={styles.productTab}
        titles={tabsData}
      />
      <div className={styles.productSection}>
        {activeTabIndex === 0 ? (
          <ProductDescription items={detailsData} />
        ) : null}
        {activeTabIndex === 1 ? <ProductReviews /> : null}
        {activeTabIndex === 2 ? <ProductDiscussions /> : null}
      </div>
      <ProductsSlider
        data={relatedProductsData}
        itemsPerSlide={4}
        title="Related Products"
      />
    </div>
  );
}

export default ProductPage;
