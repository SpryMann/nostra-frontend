import { Discussion, ProductDiscussionCard } from 'entities/product';

interface Props {
  data: Discussion;
  className?: string;
}

function DiscussionThread(props: Props) {
  const { data, className = '' } = props;

  return (
    <div className={className}>
      <ProductDiscussionCard data={data} withChildren={data.withReplies}>
        {data.withReplies && data.replies.length
          ? data.replies.map((reply) => (
              <ProductDiscussionCard
                data={reply}
                key={reply.id}
                withChildren={false}
              />
            ))
          : null}
      </ProductDiscussionCard>
    </div>
  );
}

export default DiscussionThread;
