import React, { useState } from 'react';
import useValidation from '../../hook/UseValidation';

const VideoForm = ({ initialData, onSubmit, categories, submitText, resetForm, styles }) => {
  const [formData, setFormData] = useState(initialData);
  const { errors, validate } = useValidation(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
      if (resetForm) {
        setFormData(initialData);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Video Name"
          className={styles.formInput}
        />
        {errors.name && <p className={styles.formError}>{errors.name}</p>}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Image URL</label>
        <input
          name="imageurl"
          value={formData.imageurl}
          onChange={handleChange}
          placeholder="Image URL"
          className={styles.formInput}
        />
        {errors.imageurl && <p className={styles.formError}>{errors.imageurl}</p>}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Video URL</label>
        <input
          name="videourl"
          value={formData.videourl}
          onChange={handleChange}
          placeholder="Video URL"
          className={styles.formInput}
        />
        {errors.videourl && <p className={styles.formError}>{errors.videourl}</p>}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Description</label>
        <input
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className={styles.formInput}
        />
        {errors.description && <p className={styles.formError}>{errors.description}</p>}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className={styles.formSelect}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        {errors.category && <p className={styles.formError}>{errors.category}</p>}
      </div>
      <div className={styles.formButtonContainer}>
        <button type="submit" className={styles.formButton}>{submitText}</button>
      </div>
    </form>
  );
};

export default VideoForm;
