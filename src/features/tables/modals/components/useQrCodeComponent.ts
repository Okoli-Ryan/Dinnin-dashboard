import { Form } from 'antd';

import { TableCodeLength } from '@/core/Constants';
import { GenerateRandomString } from '@/core/Utils';

export default function useQrCodeComponent() {
	const form = Form.useFormInstance();

	Form.useWatch("code", form);

	const qrCode = form.getFieldValue("code");

	async function generateCode() {
		const newQrCode = GenerateRandomString(TableCodeLength);
		console.log(newQrCode);
		form.setFieldValue("code", newQrCode);
	}

	return { generateCode, qrCode };
}
