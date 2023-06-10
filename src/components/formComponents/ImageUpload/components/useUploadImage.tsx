import { message, UploadProps } from "antd";
import { RcFile, UploadChangeParam, UploadFile } from "antd/es/upload";
import React, { useState } from "react";

import { ParseError, reportErrorMessage } from "../../../../core/Utils";
import { uploadImage, useLazyUploadQuery } from "../../../../services/Image.api";
import { getBase64 } from "./UploadImage.utils";

interface IUseUploadImage {
	onSuccess?: () => void;
	folderName: string;
}

export default function useUploadImage({ onSuccess, folderName }: IUseUploadImage) {
	const [isUploading, setIsUploading] = useState(false);
	const [imageUrl, setImageUrl] = useState<string>();
	const [upload] = useLazyUploadQuery();

	const handleChange = async (info: UploadChangeParam<UploadFile<any>>) => {
		setIsUploading(true);
		if (!info.file) {
			message.error("Invalid file uploaded");
			return;
		}

		try {
			const formData = new FormData();
			formData.append("file", info.file as any);
			formData.append("folderName", folderName);

			const response = await uploadImage(formData);
			console.log({ response });
			setImageUrl(response);
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
