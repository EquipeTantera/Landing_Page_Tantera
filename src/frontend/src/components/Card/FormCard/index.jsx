import PropTypes from 'prop-types';
import Input from '../../Input';
import styles from './styles.module.scss';
import Button from '../../Buttons/Button';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function FormCard({ title, inputs, textButton, onSubmit, isContact }) {
  const [sending, setSending] = useState(false);
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID; 
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; 
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  console.log("Service ID:", serviceID);
console.log("Template ID:", templateID);
console.log("Public Key:", publicKey);


  const [formData, setFormData] = useState(
    inputs.reduce((acc, input) => {
      acc[input.name] = input.value || '';
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        (response) => {
          console.log('Email enviado com sucesso:', response.text);
          alert('E-mail enviado com sucesso!');
          setSending(false);
        },
        (error) => {
          console.error('Erro ao enviar e-mail:', error.text);
          alert('Erro ao enviar o e-mail. Tente novamente.');
          setSending(false);
        }
      );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>{title}</h2>
      <form 
        className={styles.container__content} 
        onSubmit={(e) => {
          e.preventDefault();
          isContact ? sendEmail(e) : onSubmit();
        }}
      >
        {inputs.map((inputProps, index) => (
          <div key={index} className={styles.container__input}>
            <Input 
              {...inputProps} 
              onChange={(e) => {
                handleChange(e);
                inputProps.onChange && inputProps.onChange(e);
              }}
              value={formData[inputProps.name] || ''}
            />
          </div>
        ))}
        {textButton && (
          <div className={styles["container--button"]}>
            {isContact ? (
              <button
                type="submit"
                className={styles["container--button__button"]}
                disabled={sending}
              >
                {sending ? 'Enviando...' : textButton}
              </button>
            ) : (
              <Button title={textButton} path={"mailto:atleticainteli@inteli.edu.br"} />
            )}
          </div>
        )}
      </form>
    </div>
  );
}

FormCard.propTypes = {
  title: PropTypes.string.isRequired,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['text', 'select', 'textarea', 'number', 'email']).isRequired,
      label: PropTypes.string,
      placeholder: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ),
      onChange: PropTypes.func, 
      name: PropTypes.string, 
      value: PropTypes.string, 
    })
  ).isRequired,
  textButton: PropTypes.string,
  onSubmit: PropTypes.func, 
  isContact: PropTypes.bool.isRequired,
};
