import React, { useState } from 'react';

export default function useAuthScreen() {
	const [showLoginForm, setShowLoginForm] = useState(true);

	function toggleLoginForm() {
		setShowLoginForm((prev) => !prev);
	}

	return { toggleLoginForm, showLoginForm };
}
