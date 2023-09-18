import { FC, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import type { Identifier } from "dnd-core";
type IDndCardContainer = {
	children: React.ReactNode;
	accept: string;
	id: string;
	moveCard: (dragIndex: number, hoverIndex: number) => void;
	index: number;
	isDraggable?: boolean;
};

interface DragItem {
	index: number;
	id: string;
	type: string;
}

export const DndCardContainer: FC<IDndCardContainer> = ({ index, moveCard, children, accept, id, isDraggable }) => {
	const ref = useRef<HTMLDivElement>(null);

	const [{ isDragging }, drag] = useDrag({
		type: accept,
		item: () => {
			return { id, index };
		},
		collect: (monitor: any) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const opacity = isDragging ? 0 : 1;

	const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
		accept,
		// collect(monitor) {
		// 	return {
		// 		handlerId: monitor.getHandlerId(),
		// 	};
		// },
		hover(item: DragItem, monitor) {
			if (!ref.current) {
				return;
			}

			const dragIndex = item.index;
			const hoverIndex = index;

			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return;
			}

			// Time to actually perform the action
			item.index = index;
			moveCard(dragIndex, hoverIndex);

			// Note: we're mutating the monitor item here!
			// Generally it's better to avoid mutations,
			// but it's good here for the sake of performance
			// to avoid expensive index searches.
		},
	});
	drag(drop(ref));

	return (
		<div ref={ref} style={{ opacity }} data-handler-id={handlerId}>
			{children}
		</div>
	);
};
