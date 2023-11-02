import sectionsAPI from "@/app/api/api";
import React, { useEffect, useState } from "react";


function Sections() {
    const [isLoading, setIsLoading] = useState(true);
    const [sections, setSections] = useState<any>(null);

    useEffect(() => {
        if (isLoading) {
            
            fetchData()
        }
    },[isLoading])
    

    const fetchData = async () => {
        try {
            const res: any = await sectionsAPI.getAll()
            
            setSections(res);
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    console.log('dataerer ', sections);

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {sections && sections.data.map((item: any) => (
                <div key={item.attributes.section_id}>
                    <h2>{item.attributes.SectionTitle}</h2>
                    <ul>
                        {item.attributes.sections.map((sec: any) => (
                            <li key={sec.id + sec.title}>{sec.title}</li>
                    ))}
                    </ul>
                    
                </div>
            ))}
        </div>
    )
}

export default Sections;