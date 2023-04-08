import { useForm } from 'antd/es/form/Form';
import React, { useState } from 'react';

import { useSignupContext } from '../../context/SignupContext';

export default function useSignupStepTwo() {

    const [form] = useForm()
    const [loading, setLoading] = useState(false)
    const { previousStep, changeFormValues, formValues } = useSignupContext()

    function goToPreviousStep(){
        const values = form.getFieldsValue()

        changeFormValues(values)
        previousStep()
    }

    async function onSubmit() {
        try {
            setLoading(true)
            const values = form.getFieldsValue()

            changeFormValues(values)
            
        } catch (error) {
            
        }
        finally{
            setLoading(false)
        }
	}

 return { form, onSubmit, goToPreviousStep, loading, formValues }
}
