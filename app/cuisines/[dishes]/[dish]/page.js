"use client";
import { useQuery, gql } from "@apollo/client";
import client from "@/apolloClient";
import Link from "next/link";

export default function dish({params}){
    const getQuery = params.dish

    const GET_ITEM = gql`
    query GetDishes($slug: String!) {
      dishCollection(
        where: { slug: $slug }
      ) {
        items {
          title(locale: "en-US")
          description(locale: "en-US")
          slug
          ingredients
          preparation
          calories
          image{
            url
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_ITEM, {
    client,
    variables: { slug: getQuery }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const { dishCollection } = data
  const dishItem = dishCollection.items
    return (
      <>
        <ul>
          {dishItem.map((cuisine) => (
            <>
            <h1>{cuisine.title}</h1>
            <p>{cuisine.description}</p>
            <button>Download</button> <button>Save</button>  <button>Share</button><br/><br/>
            <img src={cuisine.image.url} style={{height:'400px', width:'500px'}} alt={cuisine.slug}/>
            <h3>Ingredients</h3>
            <p>{cuisine.ingredients}</p>
            <h3>Instructions</h3>
            <p>{cuisine.preparation}</p>
            </>
          ))}
        </ul>
      </>
    );
}