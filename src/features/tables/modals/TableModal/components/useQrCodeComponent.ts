import { Form } from 'antd';

import { TableCodeLength } from '@/core/Constants';
import { GenerateRandomString, reportSuccessMessage } from "@/core/Utils";
import { useAppSelector } from "@/store";

import { ParseRestaurantUrl } from "./utils/ParseTableUrl";

export default function useQrCodeComponent() {

    const { slug } = useAppSelector((state) => state.restaurant)!;

	const form = Form.useFormInstance();

	Form.useWatch("code", form);

	const qrCode = form.getFieldValue("code");
    const restaurantLink = ParseRestaurantUrl(slug, qrCode);

	async function generateCode() {
		const newQrCode = GenerateRandomString(TableCodeLength);
		console.log(newQrCode);
		form.setFieldValue("code", newQrCode);
		reportSuccessMessage("Code generated");
	}

    function copyCode() {
		//generate link to copy from
		navigator.clipboard.writeText(restaurantLink);
		reportSuccessMessage("Link copied to clipboard");
	}

	return { generateCode, copyCode, restaurantLink };
}
