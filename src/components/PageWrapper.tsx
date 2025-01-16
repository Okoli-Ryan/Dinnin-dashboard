import React from "react";

interface IPageWrapper {
	title: string;
	subtitle?: string;
	children: React.ReactNode;
	extra?: React.ReactNode;
}

export default function PageWrapper({ title, subtitle, children, extra }: IPageWrapper) {
	return (
		<div className="h-full sm:px-4">
			<div className="flex flex-col h-full gap-8 py-8 overflow-auto bg-white/90">
				<div className="flex flex-col items-start gap-4 px-4 sm:items-center sm:justify-between sm:flex-row">
					<div className="flex flex-col">
						<div className="text-2xl font-bold text-secondary">{title}</div>
						<div className="text-base text-secondary">{subtitle}</div>
					</div>
					{extra}
				</div>
				<div className="p-4">{children}</div>
			</div>
		</div>
	);
}
