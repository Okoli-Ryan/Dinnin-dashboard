import { useForm } from 'antd/es/form/Form';
import React from 'react';

export default function useLogin() {

    const [form] = useForm()

  return { form }
}
