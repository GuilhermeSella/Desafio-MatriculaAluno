import axios from "axios";
import { useQuery } from "react-query";


const useGetAlunos = ()=>{

    const {error, data, isLoading} = useQuery("getAlunos", async()=>{
        
        return await axios.get("http://localhost:8000/alunos")
    })


    return {data, error, isLoading};
    
}

export default useGetAlunos;