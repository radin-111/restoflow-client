// src/components/shared/Loading.jsx
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { motion } from 'framer-motion';

const shimmer = {
    initial: { opacity: 0.5 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
        },
    },
};

const Loading = () => {
    return (

        <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-pink-50 via-purple-100 to-blue-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-black">
            <motion.div
                className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-zinc-900 p-10 rounded-3xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Left: Text Content Skeleton */}
                <div className="space-y-4">
                    <motion.div variants={shimmer} initial="initial" animate="animate">
                        <Skeleton height={40} width="80%" borderRadius={10} />
                    </motion.div>
                    <motion.div variants={shimmer} initial="initial" animate="animate">
                        <Skeleton count={3} height={20} borderRadius={8} />
                    </motion.div>
                    <motion.div variants={shimmer} initial="initial" animate="animate">
                        <Skeleton height={200} borderRadius={12} />
                    </motion.div>
                </div>

                {/* Right: Card Preview Skeleton */}
                <div className="space-y-6">
                    <motion.div variants={shimmer} initial="initial" animate="animate">
                        <Skeleton height={200} borderRadius={16} />
                    </motion.div>
                    <div className="flex gap-4">
                        <motion.div variants={shimmer} initial="initial" animate="animate">
                            <Skeleton height={40} width={100} borderRadius={999} />
                        </motion.div>
                        <motion.div variants={shimmer} initial="initial" animate="animate">
                            <Skeleton height={40} width={100} borderRadius={999} />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Loading;