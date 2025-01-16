import React from 'react';

interface IShadowCard {
	className?: string;
	header?: React.ReactNode;
	children: React.ReactNode;
}

export default function ShadowCard({ children, className, header }: IShadowCard) {
	return (
		<>
			<div className={`${className} shadow-lg rounded-lg p-4 py-8 md:px-8 w-full`}>
				{header}
				{children}
			</div>
		</>
	);
}
