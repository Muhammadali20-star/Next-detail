import UserDetails from '@/components/user-detail/UserDetails';
import React from 'react'

const UserDetailPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id; 
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const user = await res.json();
  console.log(user);
  

  return (
    <div>
      <UserDetails data={user}/>
    </div>
  )
}

export default UserDetailPage;
