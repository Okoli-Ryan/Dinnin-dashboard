import React from "react";

interface IPageWrapper {
	title: string;
	subtitle?: string;
	children: React.ReactNode;
}

export default function PageWrapper({ title, subtitle, children }: IPageWrapper) {
	return (
		<div className="flex flex-col h-full p-8 mx-4 mt-4 overflow-auto bg-white/90">
			<div className="text-2xl font-bold text-secondary">{title}</div>
			<div className="mb-8 text-base text-secondary">{subtitle}</div>
			{children}
		</div>
	);
}
