import { useRouter } from "next/router";
import { useState } from "react";

export default function Events({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const handleClick = async () => {
    const response = await (
      await fetch("http://localhost:4000/events?category=sports")
    ).json();

    setEvents(response);
    router.push("/events?category=sports", undefined, { shallow: true });
  };
  return (
    <>
      <button onClick={handleClick}>Sports Event</button>
      <h1>List of Events</h1>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.title} {event.date} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await (
    await fetch(`http://localhost:4000/events?${queryString}`)
  ).json();

  return {
    props: {
      eventList: response,
    },
  };
}
