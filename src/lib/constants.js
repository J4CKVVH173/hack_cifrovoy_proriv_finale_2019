const ENTRY_TYPE = {
  1: 'ЕАИС',
  2: 'НАП',
  3: '398-ФЗ',
  4: '97-ФЗ',
  5: 'НАП, постоянная блокировка',
  6: 'Перс. данные',
  7: 'Анонимайзеры',
};

export { ENTRY_TYPE };

const PAGES_NAME = [
  { name: 'Список ресурсов', url: '/resources/' },
  { name: 'Детальная информация', url: '/details/' },
];

export { PAGES_NAME };

const STATUS_COLORS = {
  'Требует ремонта секции': 'rgba(255,215,46,0.4)',
  'Требует замены секции': 'rgba(255,91,90,0.4)',
};

export { STATUS_COLORS };

const PIPELINES_NAMES = {
  1: 'ФГТ1',
  2: 'ФГТ',
  3: 'КЕК',
};

export { PIPELINES_NAMES };
