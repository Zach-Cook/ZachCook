import { useState, useEffect } from "react";

import axios from '../api/axios'

export default function useResume(){

    const [ resume, setResume ] = useState()


    useEffect(() =>{
        async function getData(){

            try {
                const res = await axios.get(`/resume/api/v1/resume/`)
                setResume(res.data)
            } catch (err){
                console.log(err)
            }
            
        }
        
        getData()

        return ()=> setResume(null)
    },[])

    return { resume }


}