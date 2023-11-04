'use client'

import mongoAPI from "@/app/api/mongoAPI";
import { fetchAll, fetchById } from "@/app/api/mongoAPI";
// import sectionsAPI from "@/app/api/api";


import React, { useEffect, useState } from "react";

export type TUsers = {
    _id: string,
    name: string,
    email:  string,
    __v: number,
}



export default function Sections() {
    const [data, setData] = useState<any | null>(null)
    const [isLoading, setLoading] = useState(true)
    const [user, setUser] = useState<any | null>(null)

 
  useEffect(() => {
    fetchData()
  }, [])
    
    const fetchData = () => {
        fetchAll()
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    };

    const getUserById = async (id: string) => {
        const res = await fetchById(id);
        setUser(res);
    }
    // 65450f5bcf71e1106836cf7f
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {/* {sections && sections.data.map((item: any) => (
                <div key={item.attributes.section_id}>
                    <h2>{item.attributes.SectionTitle}</h2>
                    <ul>
                        {item.attributes.sections.map((sec: any) => (
                            <li key={sec.id + sec.title}>{sec.title}</li>
                    ))}
                    </ul>
                    
                </div>
            ))} */}

            {data &&
                    data?.map((item: TUsers) => (
                        <div key={item._id}>
                            <p>{ item.name }</p>
                            <p>{ item.email }</p>
                    </div>
                ))
            }
            <button type="button" onClick={() => getUserById('65450f5bcf71e1106836cf7f')}> Отримай авокадо </button>
            {user && (
                <div>
                    <p>{user.name}</p>
                </div>
            )}
        </div>
    )
}

// export default Sections;