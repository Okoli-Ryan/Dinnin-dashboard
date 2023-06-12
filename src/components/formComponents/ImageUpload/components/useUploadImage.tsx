import { FormInstance, message, UploadProps } from "antd";
import useFormInstance from "antd/es/form/hooks/useFormInstance";
import { RcFile, UploadChangeParam, UploadFile } from "antd/es/upload";
import React, { useState } from "react";

import { ParseError, ParseFormData, reportErrorMessage } from "../../../../core/Utils";
import { useLazyUploadQuery } from "../../../../services/Image.api";
import { getBase64 } from "./UploadImage.utils";

interface IUseUploadImage {
	onSuccess?: () => void;
	folderName: string;
	name: string;
}

export default function useUploadImage({ onSuccess, folderName, name }: IUseUploadImage) {
	const form = useFormInstance();
	const [isUploading, setIsUploading] = useState(false);
	const [imageUrl, setImageUrl] = useState<string>();
	const [upload] = useLazyUploadQuery();

	const handleChange = async (info: UploadChangeParam<UploadFile<any>>) => {
		setIsUploading(true);
		form.setFieldValue(name, undefined);
		setImageUrl(undefined);

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
