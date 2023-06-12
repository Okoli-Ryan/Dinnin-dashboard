import { Form, FormInstance, Upload, UploadProps } from "antd";
import React, { HTMLAttributes, useEffect } from "react";

import { beforeUpload } from "./UploadImage.utils";
import useUploadImage from "./useUploadImage";

interface IUploadImage {
	folderName: string;
	name: string;
	label?: string;
	className?: HTMLAttributes<HTMLInputElement>;
	onSuccess?: () => void;
}

export default function UploadImage({ folderName, className, onSuccess, name, label }: IUploadImage) {
	const { handleChange, imageUrl, isUploading } = useUploadImage({
		onSuccess,
		folderName,
		name,
	});

	return (
		<Form.Item name={name} label={label}>
			<Upload
				listType="picture-circle"
				className={`${className} rounded-full`}
				showUploadList={false}
				beforeUpload={beforeUpload}
				onChange={handleChange as any}>
				{imageUrl ? (
					<img src={imageUrl} alt="avatar" className="w-16 h-16" />
				) : (
					<div>
						{isUploading ? "loading" : "Add"}
						<div style={{ marginTop: 8 }}>Upload</div>
					</div>
				)}
			</Upload>
		</Form.Item>
	);
}
