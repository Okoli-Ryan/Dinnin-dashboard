import React from "react";
import { BsFilter } from "react-icons/bs";

import { Button } from "@/components/Button";
import { IFilterData } from "@/core/CommonTypes";
import useDisclose from "@/hooks/useDisclose";

import { FilterModal } from "./components/FilterModal";

interface IFilterButton {
	filterOptions: IFilterData;
	onFilter?: (e: any) => void;
}

export default function FilterButton({ filterOptions, onFilter = () => {} }: IFilterButton) {
	const { onOpen, isOpen, onClose } = useDisclose();

	return (
		<>
			<Button size="middle" className="flex justify-center w-max" onClick={onOpen} icon={<BsFilter className="text-xl text-white " />}>
				Filter
			</Button>
			{<FilterModal data={filterOptions} show={isOpen} onSubmit={onFilter} onCancel={onClose} />}
		</>
	);
}
