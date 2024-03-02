"use client";
import { useQuery, gql } from "@apollo/client";
import client from "@/apolloClient";
import Link from "next/link";

const GET_CUISINES = gql`
  query {
    cuisineCollection {
      items {
        name
        slug
        image{
          url
        }
      }
    }
  }
`;

export default function Cuisines() {
  const { loading, error, data } = useQuery(GET_CUISINES, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const { cuisineCollection } = data;
  return (
    <>
      <h1>Cuisines</h1>
      <ul>
        {cuisineCollection.items.map((cuisine) => (
          <li key={cuisine.slug}>
            <img src={cuisine.image.url} style={{width:'100px', height:'100px'}} alt="Image" />
            <Link href={`/cuisines/${cuisine.slug}`}>
              <h2>{cuisine.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
