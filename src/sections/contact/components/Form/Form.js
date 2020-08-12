import React, {useState} from "react";
import './Form.modules.css';

import useForm from '../../../../shared/hooks/useForm';
import validate from "../../../../shared/utility/utility";

const Form = props => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submit,
        validate
    );

    const [messageVisibility, setMessageVisibility] = useState(false);

    function submit() {
        setMessageVisibility(true);
        setTimeout(
            () =>
            setMessageVisibility(false),
            5000
        );
    }
    
    return (
        <form
            className="contact-form"
            onSubmit={handleSubmit} 
            noValidate>
            <label>
                <input 
                    className={`${errors.name && "inputError"}`}
                    placeholder="Name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}/>
                {errors.name && <p className="error">{errors.name}</p>}
            </label>
            <label>
                <input 
                    className={`${errors.email && "inputError"}`}
                    placeholder="Email"
                    name="email"
                    type="email" 
                    value={values.email}
                    onChange={handleChange}/>
                {errors.email && <p className="error">{errors.email}</p>}
            </label>
            <label>
                <input
                    className={`${errors.message && "inputError"}`}
                    placeholder="Message"
                    name="message"
                    type="textarea"
                    value={values.message}
                    onChange={handleChange}/>
                {errors.message && <p className="error">{errors.message}</p>}
            </label>
            <input type="submit" value="submit" />
            {messageVisibility && <p className="message-validation">Your message has been send</p>}
        </form>
    )
}

export default Form;