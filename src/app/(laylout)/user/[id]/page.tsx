import UserDetails from '@/components/user-detail/UserDetails';
import React from 'react';

type PageProps = {
  params: { id: string }
}

export default async function RecipeDetail({ params }: PageProps) {
  const id = await params.id
    const data = await fetch(`https://dummyjson.com/users/${id}`, { cache: "force-cache" });
    const user = await data.json();
  return (
    <div>
      <UserDetails data={user}/>
    </div>
  );
}
