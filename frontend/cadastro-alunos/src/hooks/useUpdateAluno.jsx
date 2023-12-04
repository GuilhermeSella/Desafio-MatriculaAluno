import { useContext, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { AlunoContext } from "../contexts/AlunoContext";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';




const useUpdateAluno = (inputNome,inputEmail)=>{

    const {ra} = useParams();

    console.log(inputNome)

    const mutation = useMutation({
        mutationFn : async()=>{
            return axios.put(`http://localhost:8000/aluno/${ra}`, {
                nome:inputNome,
                email:inputEmail,
            })
            .then((res)=>toast.success("Dados atualizados!"))
        }
    })

    return mutation

}



export default useUpdateAluno;