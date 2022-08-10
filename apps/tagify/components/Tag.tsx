/* eslint-disable react/destructuring-assignment */
import { FunctionComponent, useState } from 'react';
import styles from '../styles/Tag.module.css';

export interface TagProps {
  title: 'Catalogue' | 'Special';
  brand: string;
  description: string;
  size: string;
  price: string;
  saving: string;
  endDate: string;
  barcode: number;
}

const Tag: FunctionComponent<TagProps> = ({
  title: defaultTitle,
  brand: defaultBrand,
  description: defaultDescription,
  size: defaultSize,
  price: defaultPrice,
  saving: defaultSaving,
  endDate: defaultEndDate,
  barcode: defaultBarcode,
}) => {
  const [title, setTitle] = useState(defaultTitle);
  const [brand, setBrand] = useState(defaultBrand);
  const [description, setDescription] = useState(defaultDescription);
  const [size, setSize] = useState(defaultSize);
  const [price, setPrice] = useState(defaultPrice);
  const [saving, setSaving] = useState(defaultSaving);
  const [endDate, setEndDate] = useState(defaultEndDate);
  const [barcode, setBarcode] = useState(defaultBarcode);

  return (
    <div className={styles.tag}>
      <span className={styles.title}>{title}</span>
      <span className={styles.brand}>{brand}</span>
      <span className={styles.description}>{description}</span>
      <span className={styles.size}>{size}</span>
      <span className={styles.price}>{price}</span>
      <span className={styles.saving}>
        Save <span>{saving}</span>{' '}
        <span className={styles.savingSubtext}>off RRP</span>
      </span>
      <span className={styles.endDate}>
        Sale ends <span>{endDate}</span>
      </span>
      <span className={styles.barcode}>{barcode}</span>
    </div>
  );
};

export default Tag;
