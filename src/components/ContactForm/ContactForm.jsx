import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import MaskedInput from 'react-text-mask';
import { useDispatch } from 'react-redux'; 
import { addContact} from '../../redux/contactsSlice'; 


const formSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too long!").required("Required"),
});

function ContactForm() {
    const dispatch = useDispatch();
    const userNameId = useId();
    const userNumberId = useId();
   

    const handleSubmit = (values, actions) => {
        dispatch(addContact({ id: nanoid(), name: values.name, number: values.number }));
        actions.resetForm(); 
    };
    return (

        <Formik initialValues={{ name: "", number: "", }} onSubmit={handleSubmit} validationSchema={formSchema}>
                {({ isSubmitting }) => (
                    <Form className={css.form}>
                        <div>
                            <label htmlFor={userNameId}>Name</label>
                            <Field className={css.field} type="text" name="name" id={userNameId} />
                            <ErrorMessage name="name" component="span" className={css.errorMessage} />
                        </div>

                        <div>
                            <label htmlFor={userNumberId}>Number</label>
                            <Field 
                                as={MaskedInput}
                                mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]} 
                                className={css.field} 
                                type="tel" 
                                name="number" 
                                id={userNumberId} 
                            />
                            <ErrorMessage name="number" component="span" className={css.errorMessage} />
                        </div>

                        <button 
                            className={css.btn} 
                            type="submit" 
                            disabled={isSubmitting} 
                        >
                            Add Contact
                        </button>
                    </Form>
                )}
            </Formik>

    );
}

export default ContactForm;
