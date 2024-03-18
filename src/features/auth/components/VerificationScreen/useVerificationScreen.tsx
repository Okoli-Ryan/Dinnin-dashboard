import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { useVerifyAdminQuery } from "../../../../api/Verification.api";
import { ParseError } from "../../../../core/Utils";

export default function useVerificationScreen() {
	const { code } = useParams();
	const { isLoading, isError, error } = useVerifyAdminQuery({ code });

	return { isLoading, isError, error: ParseError(error) };
}
