import axios from "axios";
import { useQuery } from "react-query";


const useGetAlunos = ()=>{


    const {error, data} = useQuery("getAlunos", ()=>{
        return axios.get("http://localhost:8000/alunos")
    })

    return {data, error};
    
}

export default useGetAlunos;