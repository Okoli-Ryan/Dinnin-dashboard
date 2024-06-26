import { useGetAdminsQuery } from "@/api/AdminApi/Admin.api";
import PageWrapper from "@/components/PageWrapper";
import QueryTable from "@/components/QueryTable";

import { STAFF_FILTER_OPTIONS, STAFF_LIST_COLUMS } from "./Staff.utils";
import useStaff from "./useStaff";

export default function Staff() {

	const { onViewAdminPermissions } = useStaff()

	return (
		<PageWrapper title="Staff" subtitle="Create and manage staff">
			<QueryTable header="Staff Record" queryFn={useGetAdminsQuery} columns={STAFF_LIST_COLUMS({onViewAdminPermissions})} filterOptions={STAFF_FILTER_OPTIONS} />
		</PageWrapper>
	);
}
