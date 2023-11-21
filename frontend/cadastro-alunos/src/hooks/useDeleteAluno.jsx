import axios from "axios";
import { useMutation } from "react-query";

const useDeleteAluno = (raAluno)=>{

    const mutation = useMutation({
        mutationFn : async()=>{
            return axios.delete(`http://localhost:8000/aluno/${raAluno}`)
            .then((res)=>{
                location.href = "/consultaAlunos";
            })
        }
    })

    return mutation;

}

export default useDeleteAluno;