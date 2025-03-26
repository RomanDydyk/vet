import { createColumnHelper } from '@tanstack/react-table';
import {
  IActivityData,
  ICustomer,
  IPet,
  IRewardsData,
} from '../pages/DashboardPage/types';
import { SortableHeader } from '../components/CustomersTable/SortableHeader';
import NewButton from '../components/UI/NewButton';
import StatusCell from '../components/CustomersTable/StatusCell';
import SmallStar from '../assets/icons/shared/SmallStar';

const useColumnTable = (isActive: string) => {
  const columnHelper = createColumnHelper<ICustomer>();
  const petColumnHelper = createColumnHelper<IPet>();
  const starsColumnHelper = createColumnHelper<IActivityData>();
  const rewardsColumnHelper = createColumnHelper<IRewardsData>();

  const renderDateWithColor = (value: string, status: string) => {
    if (!value) return '-';

    let color = '';
    if (status === 'starsexpired' || status === 'expired') {
      color = '#FF5A5A';
    } else if (status === 'expiring') {
      color = '#FF9F41';
    }

    return color ? <span style={{ color }}>{value}</span> : value;
  };

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
      cell: ({ getValue, row }) =>
        renderDateWithColor(getValue(), row.original.status || ''),
    }),
    columnHelper.accessor('lastActivityDate', {
      header: ({ column }) => (
        <SortableHeader column={column} title="Last Activity Date" />
      ),
      cell: ({ getValue, row }) =>
        renderDateWithColor(getValue(), row.original.status || ''),
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
      cell: (info) => {
        const count = info.getValue() || 0;
        return (
          <span>
            {Array(count)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  style={{ display: 'inline-block', marginRight: '2px' }}
                >
                  <SmallStar />
                </div>
              ))}
          </span>
        );
      },
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
      cell: ({ getValue, row }) =>
        renderDateWithColor(
          getValue(),
          row.original.startsStatus || row.original.rewordsStatus || ''
        ),
    }),
    petColumnHelper.accessor('expiryDate', {
      header: ({ column }) => (
        <SortableHeader column={column} title="Expiry Date" />
      ),
      cell: ({ getValue, row }) =>
        renderDateWithColor(
          getValue(),
          row.original.startsStatus || row.original.rewordsStatus || ''
        ),
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

  const starsColumns = [
    starsColumnHelper.accessor('status', {
      header: 'Status',
      cell: ({ row }) => <StatusCell status={row.original.status} />,
    }),
    starsColumnHelper.accessor('petName', {
      header: ({ column }) => (
        <SortableHeader column={column} title="Pet Name" />
      ),
      cell: (info) => info.getValue(),
    }),
    starsColumnHelper.accessor('product', {
      header: 'Product',
      cell: (info) => info.getValue(),
    }),
    starsColumnHelper.accessor('issueDate', {
      header: ({ column }) => (
        <SortableHeader column={column} title="Issue Date" />
      ),
      cell: ({ getValue, row }) =>
        renderDateWithColor(getValue(), row.original.status),
    }),
    starsColumnHelper.accessor('expiryDate', {
      header: ({ column }) => (
        <SortableHeader column={column} title="Expiry Date" />
      ),
      cell: ({ getValue, row }) =>
        renderDateWithColor(getValue(), row.original.status),
    }),
    starsColumnHelper.accessor('size', {
      header: ({ column }) => <SortableHeader column={column} title="Size" />,
      cell: (info) => info.getValue(),
    }),
  ];

  const rewardsColumns = [
    rewardsColumnHelper.accessor('status', {
      header: 'Status',
      cell: ({ row }) => <StatusCell status={row.original.status} />,
    }),
    rewardsColumnHelper.accessor('petName', {
      header: ({ column }) => (
        <SortableHeader column={column} title="Pet Name" />
      ),
      cell: (info) => info.getValue(),
    }),
    rewardsColumnHelper.accessor('product', {
      header: 'Product',
      cell: (info) => info.getValue(),
    }),
    rewardsColumnHelper.accessor('issueDate', {
      header: ({ column }) => (
        <SortableHeader column={column} title="Issue Date" />
      ),
      cell: ({ getValue, row }) =>
        renderDateWithColor(getValue(), row.original.status),
    }),
    rewardsColumnHelper.accessor('redeemedDate', {
      header: ({ column }) => (
        <SortableHeader column={column} title="Redeemed Date" />
      ),
      cell: ({ getValue, row }) =>
        renderDateWithColor(getValue(), row.original.status),
    }),
    rewardsColumnHelper.accessor('expiryDate', {
      header: ({ column }) => (
        <SortableHeader column={column} title="Expiry Date" />
      ),
      cell: ({ getValue, row }) =>
        renderDateWithColor(getValue(), row.original.status),
    }),
    rewardsColumnHelper.accessor('size', {
      header: ({ column }) => <SortableHeader column={column} title="Size" />,
      cell: (info) => info.getValue(),
    }),
    rewardsColumnHelper.accessor('wholesaler', {
      header: ({ column }) => (
        <SortableHeader column={column} title="Wholesaler" />
      ),
      cell: (info) => info.getValue() || '-',
    }),
    rewardsColumnHelper.accessor('deliveryNote', {
      header: ({ column }) => (
        <SortableHeader column={column} title="Delivery Note" />
      ),
      cell: (info) => info.getValue() || '-',
    }),
    rewardsColumnHelper.accessor('dnIssueDate', {
      header: ({ column }) => (
        <SortableHeader column={column} title="DN Issue Date" />
      ),
      cell: ({ getValue, row }) =>
        renderDateWithColor(getValue(), row.original.status),
    }),
  ];

  return {
    dashboardColumns: baseColumns,
    petColumns: petColumnsWithStatus,
    starsColumns,
    rewardsColumns,
  };
};

export default useColumnTable;
