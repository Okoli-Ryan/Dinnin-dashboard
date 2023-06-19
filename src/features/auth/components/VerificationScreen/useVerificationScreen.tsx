import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { useVerifyAdminQuery } from "../../../../api/Verification.api";
import { ParseError } from "../../../../core/Utils";

export default function useVerificationScreen() {
	const { id, code } = useParams();
	const { isLoading, isError, error } = useVerifyAdminQuery({ id, code });

	return { isLoading, isError, error: ParseError(error) };
}
