import { useState } from 'react';

const useValidation = (formData) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let validationErrors = {};
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;

    if (!formData.name) {
      validationErrors.name = 'Name is required';
    } else if (formData.name.length > 20) {
      validationErrors.name = 'Name must not exceed 10 characters';
    }

    if (!formData.imageurl) {
      validationErrors.imageurl = 'Image URL is required';
    } else if (!urlPattern.test(formData.imageurl)) {
      validationErrors.imageurl = 'Image URL must be a valid URL';
    }

    if (!formData.videourl) {
      validationErrors.videourl = 'Video URL is required';
    } else if (!urlPattern.test(formData.videourl)) {
      validationErrors.videourl = 'Video URL must be a valid URL';
    }

    if (!formData.description) {
      validationErrors.description = 'Description is required';
    } else if (formData.description.length > 30) {
      validationErrors.description = 'Description must not exceed 30 characters';
    }

    if (!formData.category || formData.category == "") {
      validationErrors.category = 'Category is required';
    }

    setErrors(validationErrors);
    return validationErrors;
  };

  return { errors, validate };
};

export default useValidation;
