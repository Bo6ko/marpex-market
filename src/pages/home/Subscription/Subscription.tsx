import { useState } from 'react';
import css from './Subscription.module.css';
import Button from '../../../components/common/Button/Button';
import cn from 'classnames';

type FormType = {
  email: string
}

interface Props {
  className?: string
}

const Subscription = ({className}: Props) => {
  const [formData, setFormData] = useState<FormType>({
    email: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Form submitted: Email: ' + formData.email);
  };

  return (
    <div className={cn(css.subscription, className)}>
      <div>
        <p className={css.title}>Абонамент за новости и промоции</p>
        <p>Абонирай се за известия и бъди в час с актуалните предложения и промоции.</p>
      </div>

      <form className={css.form} onSubmit={handleSubmit} >
        <input
          className={css.input}
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Въведи имейл"
        />

        <Button className={css.btn}>Абонирай се</Button>
      </form>
    </div>
  );
};

export default Subscription;