import UserDetails from '@/components/user-detail/UserDetails';
import React from 'react'

const UserDetailPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const id = params.id;
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const user = await res.json();


  return (
    <div>
      <UserDetails data={user}/>
    </div>
  )
}

export default UserDetailPage;
