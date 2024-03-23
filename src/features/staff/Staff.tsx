import { useGetAdminsQuery } from "@/api/AdminApi/Admin.api";
import PageWrapper from "@/components/PageWrapper";
import QueryTable from "@/components/QueryTable";

import { STAFF_LIST_COLUMS } from "./Staff.utils";

export default function Staff() {
	return (
		<PageWrapper title="Staff" subtitle="Create and manage staff">
			<QueryTable queryFn={useGetAdminsQuery} columns={STAFF_LIST_COLUMS} />
		</PageWrapper>
	);
}
