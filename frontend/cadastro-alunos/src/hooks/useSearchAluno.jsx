import axios from "axios";
import { useContext } from "react";
import { useMutation } from "react-query";
import { AlunoContext } from "../contexts/AlunoContext";


const useSearchAluno = ()=>{

    const {nomeAlunoSearch} = useContext(AlunoContext);

    const mutation = useMutation({
        mutationFn : async()=>{
            return axios.get(`http://localhost:8000/aluno/${nomeAlunoSearch}`)
            .then((res)=>console.log(res.data))
        }
    })

    return mutation

}

export default useSearchAluno;