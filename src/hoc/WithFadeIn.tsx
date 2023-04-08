import { motion } from 'framer-motion';
import { useId } from 'react';

import { FadeIn } from '../core/AnimationVariant';

export const withFadeIn = (WrappedComponent: any) => {
	return (props: any) => {
		const id = useId();
		return (
			<motion.div
				key={id}
				variants={FadeIn}
				animate="visible"
				exit="hidden"
				initial="initial"
				transition={{ duration: 0.6 }}>
				<WrappedComponent {...props} />
			</motion.div>
		);
	};
};
