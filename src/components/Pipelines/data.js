import { PIPELINES_NAMES } from '../../lib/constants';

const data = [
  { id: 1, pipe_name: PIPELINES_NAMES[1], status: 'Исправно', defects_count: 2, last_update: 'Вчера' },
  { id: 2, pipe_name: PIPELINES_NAMES[2], status: 'Требует замены секции', defects_count: 22, last_update: 'Вчера' },
  { id: 3, pipe_name: PIPELINES_NAMES[3], status: 'Требует ремонта секции', defects_count: 562, last_update: 'Вчера' },
];

export default data;
