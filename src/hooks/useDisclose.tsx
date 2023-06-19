import React, { useCallback, useState } from "react";

export default function useDisclose() {
	const [isOpen, setIsOpen] = useState(false);

	const onOpen = useCallback(() => {
		setIsOpen(true);
	}, []);

	const onClose = useCallback(() => {
		setIsOpen(false);
	}, []);

	return { isOpen, onClose, onOpen };
}
