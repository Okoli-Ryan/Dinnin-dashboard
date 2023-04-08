import { Form, Steps, theme } from 'antd';
import { FormInstance, useForm } from 'antd/es/form/Form';
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../../components';
import { SignupStepOne, SignupStepTwo } from '../components';

const SignupContext = createContext({} as ISignupContext);

export const useSignupContext = () => useContext(SignupContext);

const SignupSteps = [
	{
		title: "Restaurant Info",
		content: <SignupStepOne />,
	},
	{
		title: "User Info",
		content: <SignupStepTwo />,
	},
];

const items = SignupSteps.map((item) => ({ key: item.title, title: item.title }));

export function SignupProvider() {
	const [form] = useForm();
	const navigate = useNavigate();
	const [currentStep, setCurrentStep] = useState(0);

	function nextStep() {
		setCurrentStep((prev) => prev + 1);
	}

	function previousStep() {
		setCurrentStep((prev) => prev - 1);
	}

	function navigateToLogin() {
		navigate("/login");
	}

	return (
		<>
			<h3 className="text-center font-bold text-3xl">Create your restaurant today.</h3>

			<div className="flex flex-col gap-4 mt-4  justify-center">
				<SignupContext.Provider value={{ nextStep, previousStep, currentStep, form }}>
					<Steps current={currentStep} items={items} />
					<Form layout="vertical" initialValues={form.getFieldsValue()} form={form}>
						{SignupSteps[currentStep].content}
					</Form>
				</SignupContext.Provider>
			</div>
			<p className="text-center mt-4">
				Already have an account? <Button.Text onClick={navigateToLogin}>Log in</Button.Text>
			</p>
		</>
	);
}

interface ISignupContext {
	nextStep: () => void;
	previousStep: () => void;
	currentStep: number;
	form: FormInstance<any>;
}
