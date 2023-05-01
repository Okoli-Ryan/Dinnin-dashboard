import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { ParseError } from '../../../../core/Utils';
import { useVerifyAdminQuery } from '../../../../services/Verification.api';

export default function useVerificationScreen() {
	const { id, code } = useParams();
	const { isLoading, isError, error } = useVerifyAdminQuery({ id, code });

	return { isLoading, isError, error: ParseError(error) };
}
