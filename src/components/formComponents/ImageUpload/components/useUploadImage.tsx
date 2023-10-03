import { Form, message } from "antd";
import { UploadChangeParam, UploadFile } from "antd/es/upload";
import { useState } from "react";

import { useLazyUploadQuery } from "../../../../api/Image.api";
import { ParseFormData, reportErrorMessage } from "../../../../core/Utils";

interface IUseUploadImage {
	onSuccess?: () => void;
	folderName: string;
	name: string;
}

export default function useUploadImage({ onSuccess, folderName, name }: IUseUploadImage) {
	const form =  Form.useFormInstance();
	const [isUploading, setIsUploading] = useState(false);
	const [imageUrl, setImageUrl] = useState<string>(form.getFieldValue(name));
	const [upload] = useLazyUploadQuery();

	const handleChange = async (info: UploadChangeParam<UploadFile<any>>) => {
		setIsUploading(true);
		form.setFieldValue(name, undefined);
		setImageUrl("");

		if (!info.file) {
			message.error("Invalid file uploaded");
			return;
		}

		try {
			const payload = ParseFormData({ file: info.file, folderName });

			const response = await upload(payload).unwrap();
			setImageUrl(response.url);
			form.setFieldValue(name, response.url);
			onSuccess && onSuccess();
		} catch (error) {
			reportErrorMessage(error);
		} finally {
			setIsUploading(false);
		}
		// getBase64(info.file.originFileObj as RcFile, (url) => {
		// 	console.log({ url });
		// 	console.log({ info });
		// 	setIsUploading(false);
		// 	setImageUrl(url);
		// });
	};

	return { handleChange, isUploading, imageUrl };
}
