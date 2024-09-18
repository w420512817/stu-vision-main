import { toRaw } from 'vue';

// TODO: 临时去掉权限控制
import { usePermission } from '@common/hooks/business/usePermission';
import useTableActios from '@common/hooks/business/useTableActions';

const { hasPermission } = usePermission();

const pers = {
  detail: hasPermission([9039, 9042, 9045])
};

export const createColumns = onClickBtn => {
  return [
    { title: '年份', key: 'planYear', align: 'center' },
    { title: '计划名称', key: 'planName', align: 'center' },
    {
      title: '操作',
      key: 'actions',
      align: 'center',
      width: 120,
      render(row) {
        const { renderActions } = useTableActios(
          _act => {
            onClickBtn(toRaw(row));
          },
          [{ text: '生成报告', show: pers.detail }]
        );
        return renderActions();
      }
    }
  ];
};
