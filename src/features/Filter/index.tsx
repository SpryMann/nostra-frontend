import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { Multirange } from 'shared/ui';

import {
  filterBrandsData,
  filterCategoriesData,
  filterSizesData,
} from './data';
import { CheckboxCheck, CheckboxTag, FilterDropdown } from './ui';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  isActive: boolean;
  onClose: () => void;
}

function Filter(props: Props) {
  const { className = '', isActive, onClose } = props;
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 1000 });

  const handleChangePriceFilter = (changing: 'min' | 'max', value: number) => {
    if (changing === 'min') {
      setPriceFilter({ ...priceFilter, min: value });
      return;
    }

    setPriceFilter({ ...priceFilter, max: value });
  };

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isActive]);

  return (
    <div
      className={classNames(styles.filter, className, {
        [styles.filterActive]: isActive,
      })}
    >
      <div className={styles.filterHeader}>
        <h2 className={styles.filterTitle}>Filter</h2>
        <button className={styles.filterClose} type="button" onClick={onClose}>
          <MdClose className={styles.filterIcon} />
        </button>
      </div>
      <FilterDropdown className={styles.filterDropdown} title="Category">
        {filterCategoriesData.map((category) => (
          <FilterDropdown title={category.categoryTitle} key={category.id}>
            {category.subcategories.map((subcategory) => (
              <CheckboxCheck
                key={subcategory.id}
                id={`${category.categoryTitle}_${subcategory.title}_${subcategory.id}`}
                title={subcategory.title}
              />
            ))}
          </FilterDropdown>
        ))}
      </FilterDropdown>
      <FilterDropdown className={styles.filterDropdown} title="Brands">
        {filterBrandsData.map((brand) => (
          <CheckboxCheck
            key={brand.id}
            id={`brands_${brand.title}_${brand.id}`}
            title={brand.title}
          />
        ))}
      </FilterDropdown>
      <FilterDropdown className={styles.filterDropdown} title="Price">
        <Multirange
          className={styles.filterMultirange}
          min={0}
          max={1000}
          minMaxGap={50}
          currentMin={priceFilter.min}
          currentMax={priceFilter.max}
          handleUpdateMin={(value: number) =>
            handleChangePriceFilter('min', value)
          }
          handleUpdateMax={(value: number) =>
            handleChangePriceFilter('max', value)
          }
        />
        <div className={styles.prices}>
          <span
            className={classNames(styles.pricesPrice, styles.pricesPriceMin)}
          >
            ${priceFilter.min}
          </span>
          <span
            className={classNames(styles.pricesPrice, styles.pricesPriceMax)}
          >
            ${priceFilter.max}
          </span>
        </div>
      </FilterDropdown>
      <FilterDropdown
        className={classNames(styles.filterDropdown, styles.filterDropdownLast)}
        title="Size"
      >
        <div className={styles.filterSizes}>
          {filterSizesData.map((size) => (
            <CheckboxTag
              key={size.id}
              id={`sizes_${size.title}_${size.id}`}
              title={size.title}
            />
          ))}
        </div>
      </FilterDropdown>
      <div className={styles.filterButtons}>
        <button className={styles.filterButton} type="button" onClick={onClose}>
          Apply filters
        </button>
        <button
          className={classNames(
            styles.filterButton,
            styles.filterButtonReverse
          )}
          type="button"
        >
          Reset filters
        </button>
      </div>
    </div>
  );
}

export default Filter;
