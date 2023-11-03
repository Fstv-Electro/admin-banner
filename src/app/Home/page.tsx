'use client'

import Sections from "@/components/Banner";
import { TUsers } from "@/components/Banner";

async function getData() {
  try {
        const res = await fetch('http://localhost:3000/api/users');
        console.log(res);

        if (!res.ok) {
            throw new Error('failed to fetch users');
        }
        return res.json();
    } catch (error) {
        console.log('error loading users')
    }
}

export default function Home() {

  return (

    <div>
      {/* {users && users.map((item: TUsers) => (
        <div key={item._id}>
          <p>{ item.name }</p>
          <p>{ item.email }</p>
        </div>
      ))} */}
      <Sections/>
    </div>
  )
}





