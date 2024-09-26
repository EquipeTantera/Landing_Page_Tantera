import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function FilterModal({ isOpen, onClose, onApplyFilters }) {
  const [selectedSort, setSelectedSort] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedGender, setSelectedGender] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((item) => item !== category)
        : [...prevCategories, category]
    );
  };

  const handleSizeChange = (size) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((item) => item !== size)
        : [...prevSizes, size]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((item) => item !== color)
        : [...prevColors, color]
    );
  };

  const handleApplyFilters = () => {
    onApplyFilters({
      sort: selectedSort,
      categories: selectedCategories,
      sizes: selectedSizes,
      colors: selectedColors,
      gender: selectedGender,
    });
    onClose();
  };
  

  if (!isOpen) return null; 

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.modal__content}>
          {/* Classificação */}
          <div className={styles.modal__content__filter}>
            <h3 className={styles.modal__content__filter__title}>Classificar por:</h3>
            <label className={styles.modal__content__filter__label}>
              <input
                type="radio"
                name="sort"
                value="menor"
                checked={selectedSort === 'menor'}
                onChange={(e) => setSelectedSort(e.target.value)}
                className={styles.modal__content__filter__input}
              />
              Menor preço
            </label>
            <label className={styles.modal__content__filter__label}>
              <input
                type="radio"
                name="sort"
                value="maior"
                checked={selectedSort === 'maior'}
                onChange={(e) => setSelectedSort(e.target.value)}
                className={styles.modal__content__filter__input}
              />
              Maior preço
            </label>
          </div>

          {/* Categorias */}
          <div className={styles.modal__content__filter}>
            <h3 className={styles.modal__content__filter__title}>Categorias:</h3>
            {['Acessórios de Festa', 'Uniformes', 'Coleção'].map((category) => (
              <label key={category} className={styles.modal__content__filter__label}>
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className={styles.modal__content__filter__input}
                />
                {category}
              </label>
            ))}
          </div>

          {/* Tamanhos */}
          <div className={styles.modal__content__filter}>
            <h3 className={styles.modal__content__filter__title}>Tamanhos:</h3>
            <div className={styles.modal__content__filter__sizes}>
              {["PP", "P", "M", "G", "GG"].map((size) => (
                <label className={`${styles.modal__content__filter__size} ${selectedSizes.includes(size) ? styles.selected : ''}`} key={size}>
                  <input
                    type="checkbox"
                    value={size}
                    checked={selectedSizes.includes(size)}
                    onChange={() => handleSizeChange(size)}
                    className={styles.modal__content__filter__size__input}
                  />
                  {size}
                </label>
              ))}
            </div>
          </div>

          {/* Cores */}
          <div className={styles.modal__content__filter}>
            <h3 className={styles.modal__content__filter__title}>Cor:</h3>
            {['preto', 'roxo', 'branco', 'vermelho'].map((color) => (
              <label key={color} className={styles.modal__content__filter__label}>
                <input
                  type="checkbox"
                  value={color}
                  checked={selectedColors.includes(color)}
                  onChange={() => handleColorChange(color)}
                  className={styles.modal__content__filter__input}
                />
                {color}
              </label>
            ))}
          </div>

          {/* Gênero */}
          <div className={styles.modal__content__filter}>
            <h3 className={styles.modal__content__filter__title}>Gênero:</h3>
            {['feminino', 'masculino', 'unissex'].map((gender) => (
              <label key={gender} className={styles.modal__content__filter__label}>
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={selectedGender === gender}
                  onChange={(e) => setSelectedGender(e.target.value)}
                  className={styles.modal__content__filter__input}
                />
                {gender}
              </label>
            ))}
          </div>

          <button className={styles.modal__content__button} onClick={handleApplyFilters}>
            Aplicar Filtros
          </button>
        </div>

        <div className={styles.modal__image}>
          <button className={styles.modal__image__button} onClick={onClose}>X</button>
          <p className={styles.modal__image__text}>Filtros</p>
        </div>
      </div>
    </div>
  );
}

FilterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onApplyFilters: PropTypes.func.isRequired, 
};
