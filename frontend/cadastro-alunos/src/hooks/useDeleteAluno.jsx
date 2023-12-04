import axios from "axios";
import { useMutation } from "react-query";
import { toast, ToastContainer } from 'react-toastify';
const useDeleteAluno = (raAluno)=>{

    const mutation = useMutation({
        mutationFn : async()=>{
            return axios.delete(`http://localhost:8000/aluno/${raAluno}`)
            .then((res)=>{
                toast.success("Aluno excluído!")
                
            })
        }
    })

    return mutation;

}

export default useDeleteAluno;