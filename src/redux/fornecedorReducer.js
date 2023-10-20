import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";

const produtoSlice = createSlice({
    name:'fornecedor',
    initialState:{
        status: ESTADO.OCIOSO,
        mensagem:'',
        listaFornecedores:[]
    },
    reducers:{
        //ação ou action adicionar
        adicionar:(state, action)=>{
            state.listaFornecedores.push(action.payload);
        },
        remover:(state,action)=>{
            state.listaFornecedores = state.listaFornecedores.filter(fornecedor => fornecedor.cnpj !== action.payload.cnpj);
        },
        atualizar:(state,action)=>{
            const listaTemporariaFornecedores = state.listaFornecedores.filter(fornecedor => fornecedor.cnpj !== action.payload.cnpj);
            state.listaFornecedores = [...listaTemporariaFornecedores, action.payload.fornecedor];
        }

    }
});

export const {adicionar,remover,atualizar} = produtoSlice.actions; 
export default produtoSlice.reducer;