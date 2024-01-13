import { Skeleton, SkeletonProps } from "antd";

interface SkeletonLoader extends SkeletonProps {
	isLoading: boolean;
	children: React.ReactNode;
}

export default function SkeletonLoader({ children, isLoading, ...props }: SkeletonLoader) {
	return <>{isLoading ? <Skeleton.Button active {...props} /> : children}</>;
}
