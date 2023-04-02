import { httpClient } from '../utils/httpClient';
import { BlogListResp, BlogPostResp } from '../types/types';

export const blogApi = {
  async getBlogList(pageInfo: [string, number, number]) {
    const [method, pageIndex, pageSize] = pageInfo;

    const skip = (pageIndex - 1) * pageSize;
    const limit = pageSize;

    const payload = JSON.stringify({
      collection: 'posts',
      database: 'sample_training',
      dataSource: 'Cluster0',
      skip,
      limit,
    });

    try {
      const response = await httpClient.post<BlogListResp>('/api/app/data-lhvnl/endpoint/data/v1/action/find', payload);

      return response.data.documents;
    } catch (error) {
      console.error(error);
      throw new Error('블로그 리스트 가져오기 요청 실패!');
    }
  },

  getBlogDetail() {
    console.log('blogDetail');
  },
};
