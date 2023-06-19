import React from "react";
import { withErrorBoundary } from "react-error-boundary";

import { Button } from "../components";
import { reportErrorMessage } from "../core/Utils";

const withErrorBoundaryHandler = (Component: React.ComponentType) => {
	const ErrorBoundaryHandler = withErrorBoundary(Component, {
		fallback: <ErrorBoundaryComponent />,
		onError(error, info) {
			reportErrorMessage(error);
		},
	});

	return ErrorBoundaryHandler;
};

function ErrorBoundaryComponent() {
	return (
		<div className="flex flex-col h-full justify-center gap-4">
			<h2 className="text-2xl text-center font-bold">Something went wrong</h2>
			<Button className="self-center">Refresh page</Button>
		</div>
	);
}

export default withErrorBoundaryHandler;
