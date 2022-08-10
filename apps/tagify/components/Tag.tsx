/* eslint-disable react/destructuring-assignment */
import { FunctionComponent, useState } from 'react';
import styles from '../styles/Tag.module.css';

export interface TagProps {
  title: string;
  brand: string;
  description: string;
  size: string;
  price: string;
  saving: string;
  endDate: string;
  barcode: string;
}

const Tag: FunctionComponent<TagProps> = ({
  title: defaultTitle,
  brand: defaultBrand,
  description: defaultDescription,
  size: defaultSize,
  price: defaultPrice,
  saving: defaultSaving,
  endDate: defaultEndDate,
  barcode,
}) => {
  const [title, setTitle] = useState<string>(defaultTitle);
  const [brand, setBrand] = useState<string>(defaultBrand);
  const [description, setDescription] = useState<string>(defaultDescription);
  const [size, setSize] = useState<string>(defaultSize);
  const [price, setPrice] = useState<string>(defaultPrice);
  const [saving, setSaving] = useState<string>(defaultSaving);
  const [endDate, setEndDate] = useState<string>(defaultEndDate);

  return (
    <div className={styles.tag}>
      <span className={styles.title}>
        <input
          className={styles.input}
          onChange={(e) => setTitle(e.currentTarget.value)}
          value={title}
        />
      </span>
      <span className={styles.brand}>
        <input
          className={styles.input}
          onChange={(e) => setBrand(e.currentTarget.value)}
          value={brand}
        />
      </span>
      <span className={styles.description}>
        <input
          className={styles.input}
          onChange={(e) => setDescription(e.currentTarget.value)}
          value={description}
        />
      </span>
      <span className={styles.size}>
        <input
          className={styles.input}
          onChange={(e) => setSize(e.currentTarget.value)}
          value={size}
        />
      </span>
      <span className={styles.price}>
        <input
          className={styles.input}
          onChange={(e) => setPrice(e.currentTarget.value)}
          value={price}
        />
      </span>
      <span className={styles.saving}>
        Save {saving} <span className={styles.savingSubtext}>off RRP</span>
      </span>
      <span className={styles.endDate}>
        Sale ends <span>{endDate}</span>
      </span>
      <span className={styles.barcode}>{barcode}</span>
    </div>
  );
};

export default Tag;
