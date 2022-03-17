import SubscriberView from "./SubscriberView";

function SubscriberList({ subscribers, deleteSubscriber }) {
  return (
    <>
      <h2>Subscribers</h2>
      <ul>
        {subscribers.map((subscriber, index) => (
          <SubscriberView
            key={index}
            subscriber={subscriber}
            deleteSubscriber={() => deleteSubscriber(index)}
          />
        ))}
      </ul>
    </>
  );
}

export default SubscriberList;
