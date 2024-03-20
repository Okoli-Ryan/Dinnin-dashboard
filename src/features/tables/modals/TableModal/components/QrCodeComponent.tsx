import { Form, QRCode } from "antd";
import { BiCopy } from "react-icons/bi";
import { BsArrowClockwise } from "react-icons/bs";

import { Button } from "@/components";

import useQrCodeComponent from "./useQrCodeComponent";

export default function QrCodeComponent() {
	const { generateCode, copyCode, restaurantLink } = useQrCodeComponent();

	return (
		<Form.Item name="code" className="w-full">
			<div className="flex flex-col items-center justify-center w-full">
				<QRCode value={restaurantLink} size={256} errorLevel="H" />
				<h3 className="text-center text-primary">Scan code to preview restaurant</h3>
				<div className="flex gap-4">
					<Button size="small" onClick={generateCode} className="mt-2" icon={<BsArrowClockwise />}>
						Refresh Code
					</Button>
					<Button.Outline size="small" onClick={copyCode} className="mt-2" icon={<BiCopy />}>
						Copy
					</Button.Outline>
				</div>
			</div>
		</Form.Item>
	);
}
