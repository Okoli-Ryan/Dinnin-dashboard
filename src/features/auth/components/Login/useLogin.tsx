import { useForm } from 'antd/es/form/Form';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function useLogin() {

    const [form] = useForm()
    const navigate = useNavigate();

	function navigateToSignup() {
		navigate("/signup");
	}

  return { form, navigateToSignup };
}
