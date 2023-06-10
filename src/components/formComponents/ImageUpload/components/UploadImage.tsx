import { Upload, UploadProps } from "antd";
import React, { HTMLAttributes } from "react";

import { beforeUpload } from "./UploadImage.utils";
import useUploadImage from "./useUploadImage";

interface IUploadImage {
	folderName: string;
	className?: HTMLAttributes<HTMLInputElement>;
	onSuccess?: () => void;
}

export default function UploadImage({ folderName, className, onSuccess }: IUploadImage) {
	const { handleChange, imageUrl, isUploading } = useUploadImage({
		onSuccess,
		folderName,
	});

	return (
		<Upload
			name={folderName}
			listType="picture-circle"
			className={className as string}
			showUploadList={false}
			beforeUpload={beforeUpload}
			onChange={handleChange as any}>
			{imageUrl ? (
				<img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
			) : (
				<div>
					{isUploading ? "loading" : "Add"}
					<div style={{ marginTop: 8 }}>Upload</div>
				</div>
			)}
		</Upload>
	);
}
