import { chunk } from 'loadsh';

import { get } from '../../utils/api';
import './styles.css';

export function news() {
  return {
    layout: 'grid',
    setLayout(layout) {
      this.layout = layout;
    },

    size: 8,
    setSize(size) {
      this.size = size;

      this.resetPage();
      this.resetPagination();
      this.recalculateActiveNews();
      this.recalculatePagination();
    },

    news: [],
    getNews() {
      get('/news').then((res) => {
        this.news = res;

        this.recalculateActiveNews();
        this.recalculatePagination();
      });
    },

    page: 1,
    resetPage() {
      this.page = 1;
    },
    setPage(page) {
      this.page = page;

      this.recalculateActiveNews();
      this.recalculatePagination();
    },

    pagination: 1,
    resetPagination() {
      this.pagination = 1;
    },
    recalculatePagination() {
      this.pagination = chunk(this.news, this.size);
    },

    activeNews: [],
    recalculateActiveNews() {
      this.activeNews = chunk(this.news, this.size)[this.page - 1];
    },
  };
}
