import { Form, QRCode, QRCodeProps } from 'antd';
import React, { ComponentType } from 'react';

import { Button } from '@/components';
import { ITable } from '@/models';

import useQrCodeComponent from './useQrCodeComponent';

export default function QrCodeComponent() {
	const { generateCode, qrCode } = useQrCodeComponent();

	return (
		<Form.Item name="code" className="w-full">
			<div className="w-full flex flex-col items-center justify-center">
				<QRCode value={qrCode} size={256} errorLevel="H" />
				<Button.Outline size="small" onClick={generateCode} className="mt-2">
					Refresh Code
				</Button.Outline>
			</div>
		</Form.Item>
	);
}
