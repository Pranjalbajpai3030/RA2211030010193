import { useQuery } from '@tanstack/react-query';
import { getUsers, getUserPosts } from '../lib/api';
import { Activity, MessageSquare, ThumbsUp, Share2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LiveFeed() {
  const [posts, setPosts] = useState([]);
  
  const { data: latestPosts } = useQuery({
    queryKey: ['live-feed'],
    queryFn: async () => {
      const users = await getUsers();
      const allPosts = await Promise.all(
        users.map((user) => getUserPosts(user.id))
      );
      return allPosts.flat().sort((a, b) => b.timestamp - a.timestamp);
    },
    refetchInterval: 5000,
  });

  useEffect(() => {
    if (latestPosts) {
      setPosts(latestPosts);
    }
  }, [latestPosts]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <Activity className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Live Activity</h2>
              <p className="text-gray-500">Real-time updates from your network</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="animate-pulse h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-sm text-green-500 font-medium">Live</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {posts?.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex-shrink-0">
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.user.id}`}
                      alt="avatar"
                      className="h-full w-full rounded-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {post.user.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {new Date(post.timestamp).toLocaleTimeString()}
                        </p>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-600">
                        New Post
                      </span>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-lg font-medium text-gray-900">{post.title}</h4>
                      <p className="mt-1 text-gray-600">{post.body}</p>
                    </div>
                    <div className="mt-4 flex items-center space-x-4">
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600 transition-colors">
                        <ThumbsUp className="h-5 w-5" />
                        <span>{Math.floor(Math.random() * 100) + 1}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600 transition-colors">
                        <MessageSquare className="h-5 w-5" />
                        <span>{Math.floor(Math.random() * 20) + 1}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600 transition-colors">
                        <Share2 className="h-5 w-5" />
                        <span>{Math.floor(Math.random() * 50) + 1}</span>
                      </button>
                    </div>
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