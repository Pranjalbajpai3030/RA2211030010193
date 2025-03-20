import { useQuery } from '@tanstack/react-query';
import { getUsers, getUserPosts, getPostComments } from '../lib/api';
import { MessageSquare, TrendingUp, ThumbsUp, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TrendingPosts() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['trending-posts'],
    queryFn: async () => {
      const users = await getUsers();
      const allPosts = await Promise.all(
        users.map((user) => getUserPosts(user.id))
      );
      const flatPosts = allPosts.flat();
      
      const postsWithComments = await Promise.all(
        flatPosts.map(async (post) => {
          const comments = await getPostComments(post.id);
          return { ...post, comments };
        })
      );

      return postsWithComments.sort(
        (a, b) => b.comments.length - a.comments.length
      );
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-3">
          <TrendingUp className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-bold">Trending Now</h2>
            <p className="text-indigo-100">Discover what's hot in your network</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <AnimatePresence>
          {posts?.slice(0, 5).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.user.id}`}
                        alt="avatar"
                        className="h-12 w-12 rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{post.user.name}</h3>
                      <p className="text-sm text-gray-500">{new Date(post.timestamp).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
                      Trending
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-xl font-semibold text-gray-900">{post.title}</h4>
                  <p className="mt-2 text-gray-600">{post.body}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600 transition-colors">
                      <ThumbsUp className="w-5 h-5" />
                      <span>{Math.floor(Math.random() * 100) + 1}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600 transition-colors">
                      <MessageSquare className="w-5 h-5" />
                      <span>{post.comments.length}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600 transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span>{Math.floor(Math.random() * 50) + 1}</span>
                    </button>
                  </div>
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="h-8 w-8 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center"
                        >
                          <img
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
                            alt="commenter"
                            className="h-full w-full rounded-full"
                          />
                        </div>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">+{post.comments.length - 3} more</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}