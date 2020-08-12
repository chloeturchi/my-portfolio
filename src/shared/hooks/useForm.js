import { useState, useEffect } from "react";

import emailjs from 'emailjs-com';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({ email: "", name: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);

    emailjs.sendForm('gmail', 'chloe_template', event.target, 'user_p7cqSICTQN0gnbfNbwgvd')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    
    setValues({
      email: "", name: "", message: ""
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
    }
  }, [callback, errors, isSubmitting]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;