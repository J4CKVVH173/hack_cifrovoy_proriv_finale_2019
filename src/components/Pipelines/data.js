import { PIPELINES_NAMES } from '../../lib/constants';

const data = [
  { id: 1, pipe_name: PIPELINES_NAMES[1], status: 'Требует ремонта секции', defects_count: 3, last_update: 'Неделю назад' },
  { id: 2, pipe_name: PIPELINES_NAMES[2], status: 'Требует замены секции', defects_count: 5, last_update: 'Вчера' },
];

export default data;
