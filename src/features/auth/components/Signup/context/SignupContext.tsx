import { Form, Steps, theme } from "antd";
import { FormInstance, useForm } from "antd/es/form/Form";
import { createContext, useContext, useState } from "react";

import { Button } from "../../../../components";
import { SignupStepOne, SignupStepTwo } from "../components";

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
	const [formValues, setFormValues] = useState({});
	const [form] = useForm();
	const [currentStep, setCurrentStep] = useState(0);

	function nextStep() {
		setCurrentStep((prev) => prev + 1);
	}

	function previousStep() {
		setCurrentStep((prev) => prev - 1);
	}

	function changeFormValues(value: {}) {
		setFormValues((prev) => ({ ...prev, ...value }));
	}

	return (
		<SignupContext.Provider value={{ nextStep, previousStep, currentStep, changeFormValues, formValues, form }}>
		<Steps current={currentStep} items={items} />
			<Form layout="vertical" initialValues={form.getFieldsValue()} form={form}>
				{SignupSteps[currentStep].content}
			</Form>
		</SignupContext.Provider>
	);
}

interface ISignupContext {
	nextStep: () => void;
	previousStep: () => void;
	currentStep: number;
	changeFormValues: (e: Object) => void;
	formValues: Object;
	form: FormInstance<any>;
}
