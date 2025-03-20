import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TopUsers from './pages/TopUsers';
import TrendingPosts from './pages/TrendingPosts';
import LiveFeed from './pages/LiveFeed';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TopUsers />} />
            <Route path="trending" element={<TrendingPosts />} />
            <Route path="feed" element={<LiveFeed />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}