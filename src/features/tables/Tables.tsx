import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { Button } from '@/components';
import LoadingComponent from '@/components/LoadingComponent';
import PageWrapper from '@/components/PageWrapper';
import withErrorBoundaryHandler from '@/hoc/WithErrorBoundaryHandler';

import TableListComponent from './components';
import TableModal from './modals/TableModal';
import useTables from './useTables';

function Tables() {
	const { onAddTable, onDeleteTable, onCloseTableModal, onEditTable, selectedTable, onShowTableModal, tableList, isLoading } = useTables();

	if (isLoading) return <LoadingComponent />;

	return (
		<PageWrapper title="Tables" subtitle="Generate QR codes for each table">
			<TableModal onAddSuccess={onAddTable} onCloseModal={onCloseTableModal} onEditSuccess={onEditTable} selectedTable={selectedTable} />
			<Button icon={<AiOutlinePlus />} className="flex items-center gap-4 px-4 w-max mb-4" onClick={() => onShowTableModal({})}>
				Add Table
			</Button>
			<TableListComponent data={tableList} onDeleteClick={onDeleteTable} onEditClick={onShowTableModal} />
		</PageWrapper>
	);
}

export default withErrorBoundaryHandler(Tables);
