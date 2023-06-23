import React, { ComponentType } from "react";
import { withErrorBoundary } from "react-error-boundary";

import { Button } from "../components";
import { reportErrorMessage } from "../core/Utils";

const withErrorBoundaryHandler = (Component: React.ComponentType) => {
	const ErrorBoundaryHandler = withErrorBoundary(Component as ComponentType, {
		fallback: <ErrorBoundaryComponent />,
		onError(error, info) {
			reportErrorMessage(error);
		},
	});

	return ErrorBoundaryHandler;
};

function ErrorBoundaryComponent() {
	return (
		<div className="flex flex-col justify-center h-full gap-4">
			<h2 className="text-2xl font-bold text-center">Something went wrong</h2>
			<Button className="self-center" onClick={() => window.location.reload()}>
				Refresh page
			</Button>
		</div>
	);
}

export default withErrorBoundaryHandler;
