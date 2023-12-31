import { createContext, useRef, useState } from "react";

export const AlunoContext = createContext();

export const AlunoProvider = ({children})=>{


    const [dataTable, setDataTable] = useState([])

    const nomeAluno = useRef("");
    const emailAluno = useRef("");
    const raAluno = useRef();
    const cpfAluno = useRef();
    const nomeAlunoSearch = useRef("");

    return(
        <AlunoContext.Provider value={{
            nomeAluno,
            emailAluno,
            raAluno,
            cpfAluno,
            nomeAlunoSearch,
            dataTable,
            setDataTable
        }}>
            {children}
        </AlunoContext.Provider>
    )

}