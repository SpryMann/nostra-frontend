import { Search } from 'shared/ui';

interface Props {
  className?: string;
}

function OrderSearch(props: Props) {
  const { className = '' } = props;

  return (
    <Search
      className={className}
      placeholder="Search for Order ID or Product"
    />
  );
}

export default OrderSearch;
