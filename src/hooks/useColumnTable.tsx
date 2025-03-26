import { createColumnHelper } from '@tanstack/react-table';
import { ICustomer, IPet } from '../pages/DashboardPage/types';
import { SortableHeader } from '../components/CustomersTable/SortableHeader';
import NewButton from '../components/UI/NewButton';
import StatusCell from '../components/CustomersTable/StatusCell';

const useColumnTable = (isActive: string) => {
  const columnHelper = createColumnHelper<ICustomer>();
  const petColumnHelper = createColumnHelper<IPet>();

  const baseColumns = [
    columnHelper.accessor('firstName', {
      header: ({ column }) => (
        <SortableHeader column={column} title="First Name" />
      ),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('lastName', {
      header: ({ column }) => (
        <SortableHeader column={column} title="Last Name" />
      ),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('email', {
      header: 'Email',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('phone', {
      header: 'Phone',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('pets', {
      header: 'Pets',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('joinDate', {
      header: ({ column }) => (
        <SortableHeader column={column} title="Join Date" />
      ),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('lastActivityDate', {
      header: ({ column }) => (
        <SortableHeader column={column} title="Last Activity Date" />
      ),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('activeRewards', {
      header: ({ column }) => (
        <SortableHeader column={column} title="Active Rewards" />
      ),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('activeStars', {
      header: ({ column }) => (
        <SortableHeader column={column} title="Active Stars" />
      ),
      cell: (info) => <span>{'★'.repeat(info.getValue())}</span>,
    }),
    columnHelper.accessor('isNew', {
      header: '',
      cell: (info) => (info.getValue() ? <NewButton /> : null),
    }),
  ];

  const petColumns = [
    petColumnHelper.accessor('ownerFirstName', {
      header: ({ column }) => (
        <SortableHeader column={column} title="First Name" />
      ),
      cell: (info) => info.getValue(),
    }),
    petColumnHelper.accessor('ownerLastName', {
      header: ({ column }) => (
        <SortableHeader column={column} title="Last Name" />
      ),
      cell: (info) => info.getValue(),
    }),
    petColumnHelper.accessor('petName', {
      header: 'Pet Name',
      cell: (info) => info.getValue(),
    }),
    petColumnHelper.accessor('issueDate', {
      header: ({ column }) => (
        <SortableHeader column={column} title="Issue Date" />
      ),
      cell: (info) => info.getValue(),
    }),
    petColumnHelper.accessor('expiryDate', {
      header: ({ column }) => (
        <SortableHeader column={column} title="Expiry Date" />
      ),
      cell: (info) => info.getValue(),
    }),
    petColumnHelper.accessor('size', {
      header: ({ column }) => <SortableHeader column={column} title="Size" />,
      cell: (info) => info.getValue(),
    }),
  ];

  const startsStatusColumn = petColumnHelper.accessor('startsStatus', {
    header: 'Status',
    cell: ({ row }) => {
      if (row.original.startsStatus) {
        return <StatusCell status={row.original.startsStatus} />;
      }
      return null;
    },
  });

  const rewordsStatusColumn = petColumnHelper.accessor('rewordsStatus', {
    header: 'Status',
    cell: ({ row }) => {
      if (row.original.rewordsStatus) {
        return <StatusCell status={row.original.rewordsStatus} />;
      }
      return null;
    },
  });

  const petColumnsWithStatus =
    isActive === 'Stars'
      ? [startsStatusColumn, ...petColumns]
      : [rewordsStatusColumn, ...petColumns];

  return {
    dashboardColumns: baseColumns,
    petColumns: petColumnsWithStatus,
  };
};

export default useColumnTable;
