import { useState } from 'react';
import css from './EasyOrdering.module.css';
import { ReactComponent as BusIcon } from '../../../assets/svg/bus-icon.svg';
import { ReactComponent as PhoneIcon } from '../../../assets/svg/phone-icon.svg';

type FormType = {
    name: string,
    phone: string
}

const EasyOrdering = () => {
    const [formData, setFormData] = useState<FormType>({
        name: '',
        phone: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Form submitted: Name: ' + formData.name + ' Phone: ' + formData.phone);
    };

    return (
        <>
            <div className={css.easyToOrder}>
                <p className={css.lapel}><strong>Лесна поръчка</strong></p>
                <form className={css.form} onSubmit={handleSubmit} >
                    <input
                        className={css.input}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Вашето име"
                    />

                    <input
                        className={css.input}
                        type="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Телефон за контакт"
                    />

                    <button className={css.btn} type="submit"><BusIcon className={css.busIcon} /> Поръчай</button>
                </form>

                <hr className={css.hrDoshed} />
                
                <div className={css.forMoreInfo}>
                    <span className={css.phone}><PhoneIcon className={css.phoneIcon} /> 0895580050</span>
                    <span>
                        Поръчайте по телефона, лесно е!<br/>
                        Ние сме на Ваше разположение! 
                    </span>
                </div>
            </div>
        </>
    )
}

export default EasyOrdering;