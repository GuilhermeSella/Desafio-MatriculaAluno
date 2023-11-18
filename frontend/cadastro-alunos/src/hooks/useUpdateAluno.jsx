import { useContext } from "react";
import { useMutation } from "react-query";
import { AlunoContext } from "../contexts/AlunoContext";


const useUpdateAluno = ()=>{

    const {raAluno, nomeAluno, emailAluno} = useContext(AlunoContext)

    const mutation = useMutation({
        mutationFn : async()=>{
            return axios.put(`http://localhost:8000/aluno/${raAluno}`, {
                nome:nomeAluno.current.value,
                email:emailAluno.current.value,
            })
            .then((res)=>console.log(res.data))
        }
    })

    return mutation

}


export default useUpdateAluno;