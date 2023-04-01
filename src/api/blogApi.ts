import { httpClient } from '../utils/httpClient';
import { BlogListResp, BlogPostResp } from '../types/types';

export const blogApi = {
  getBlogList() {
    const data = JSON.stringify({
      collection: 'posts',
      database: 'sample_training',
      dataSource: 'Cluster0',
    });

    return httpClient.post<BlogListResp>('/find', data);
  },
  getBlogDetail() {
    console.log('blogDetail');
  },
};
