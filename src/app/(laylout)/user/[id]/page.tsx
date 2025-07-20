import UserDetails from '@/components/user-detail/UserDetails';
import React, { FC } from 'react';

type PageProps = {
  params: { id: string }
}

 const RecipeDetail: FC<PageProps> = async ({ params })=> {
  const id = await params.id
    const data = await fetch(`https://dummyjson.com/users/${id}`, { cache: "force-cache" });
    const user = await data.json();
  return (
    <div>
      <UserDetails data={user}/>
    </div>
  );
}
export default RecipeDetail
