import { Button as Btn } from 'antd';
import React, { ComponentProps } from 'react';

interface IButton extends ComponentProps<typeof Btn>{}

function Button({ className, icon, block, ...props }: IButton) {
	return (
		<Btn
			size="large"
			icon={icon}
			type="primary"
			className={`${className} ${icon ? "!flex !gap-2" : ""}  !bg-primary hover:!bg-primary/80 !rounded-none disabled:opacity-50`}
			{...props}
		/>
	);
}

function ButtonText({ className, ...props }: IButton) {
	return (
		<Btn
			size="large"
			type="primary"
			className={`hover:!text-primary/60 hover:!bg-transparent !bg-transparent !shadow-none !outline-none !text-primary !p-0 !rounded-none ${className}`}
			{...props}
		/>
	);
}

function ButtonOutline({ className, icon, ...props }: IButton) {
	return (
		<Btn
			size="large"
			type="primary"
			icon={icon}
			className={`!border-primary ${className} ${
				icon ? "!flex !gap-2 items-center" : ""
			} hover:!text-primary/60 hover:!bg-transparent !bg-transparent !shadow-none !outline-none !text-primary !rounded-none ${className}`}
			{...props}
		/>
	);
}

Button.Text = ButtonText;
Button.Outline = ButtonOutline;

export { Button };