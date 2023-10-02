import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { Button } from '@/components';
import LoadingComponent from '@/components/LoadingComponent';
import PageWrapper from '@/components/PageWrapper';
import withErrorBoundaryHandler from '@/hoc/WithErrorBoundaryHandler';

import TableListComponent from './components';
import DeleteTableModal from "./modals/DeleteTableModal/DeleteTableModal";
import TableModal from './modals/TableModal';
import useSelectTable from "./useSelectTable";
import useTables from './useTables';

function Tables() {
	const { onAddTable, onDeleteTable, onEditTable, tableList, isLoading } = useTables();
	const { selectedTable, selectedDeleteTable, onShowTableModal, onCloseTableModal, onCloseDeleteTableModal, onSelectDeleteTable } = useSelectTable();

	if (isLoading) return <LoadingComponent />;

	return (
		<PageWrapper title="Tables" subtitle="Generate QR codes for each table">
			<TableModal onAddSuccess={onAddTable} onCloseModal={onCloseTableModal} onEditSuccess={onEditTable} selectedTable={selectedTable} />
			<DeleteTableModal onClose={onCloseDeleteTableModal} onDelete={onDeleteTable} selectedTable={selectedDeleteTable} />
			<Button icon={<AiOutlinePlus />} className="flex items-center gap-4 px-4 w-max mb-4" onClick={() => onShowTableModal({})}>
				Add Table
			</Button>
			<TableListComponent data={tableList} onDeleteClick={onSelectDeleteTable} onEditClick={onShowTableModal} />
		</PageWrapper>
	);
}

export default withErrorBoundaryHandler(Tables);
