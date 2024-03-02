"use client";
import { useQuery, gql } from '@apollo/client';
import client from '@/apolloClient';

const GET_CONTENT = gql`
query {
    dishaboutCollection {
      items {
        title
        about
      }
    }
  }
`;

export default function About() {
  const { loading, error, data } = useQuery(GET_CONTENT, { client });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const { dishaboutCollection } = data;
  const about = dishaboutCollection.items[0];

  return (
    <div>
      <h1>{about.title}</h1>
      <p>{about.about}</p>
    </div>
  );
}
