import React from "react";

import useDisclose from "../../../../hooks/useDisclose";

export default function useCoordinatePickerModal() {
	const { isOpen, onOpen } = useDisclose();

	return { isOpen };
}
