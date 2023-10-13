import React from "react";

interface IPageWrapper {
	title: string;
	subtitle?: string;
	children: React.ReactNode;
	extra?: React.ReactNode;
}

export default function PageWrapper({ title, subtitle, children, extra }: IPageWrapper) {
	return (
		<div className="px-4 h-full">
			<div className="flex flex-col h-full gap-8 py-8 overflow-auto bg-white/90">
				<div className="flex gap-4 mx-8 items-center justify-between">
					<div className="flex flex-col">
						<div className="text-2xl font-bold text-secondary">{title}</div>
						<div className="text-base text-secondary">{subtitle}</div>
					</div>
					{extra}
				</div>
				{children}
			</div>
		</div>
	);
}
