import RecipeDetails from '@/components/recipe-detail/RecipeDetails';
import React from 'react'

const RecipeDetail = async (props: {params: Promise<{id: string}>;}) => {
  const params = await props.params;
  const id =  params.id
  const data = await fetch(`https://dummyjson.com/recipes/${id}`, { cache: "force-cache" });
  const recipe = await data.json();
  return (
    <div>
        <RecipeDetails data={recipe}/>
    </div>
  )
}

export default RecipeDetail