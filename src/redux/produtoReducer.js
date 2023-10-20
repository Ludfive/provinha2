import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";

//name, initialState e reducers são atributos obrigatórios
//de um objeto que cria uma 'fatia/slice' da store, resultando em um redutor. 
const produtoSlice = createSlice({
    name:'produto',
    initialState:{
        status: ESTADO.OCIOSO,
        mensagem:'',
        listaProdutos:[]
    },
    reducers:{
        adicionar:(state, action)=>{
            state.listaProdutos.push(action.payload);
        },
        remover:(state,action)=>{
            state.listaProdutos = state.listaProdutos.filter(produto => produto.id !== action.payload.id);
        },
        atualizar:(state,action)=>{

            const listaTemporariaProdutos = state.listaProdutos.filter(produto => produto.id !== action.payload.id);
            state.listaProdutos = [...listaTemporariaProdutos, action.payload.produto];
        }

    }
});

export const {adicionar,remover,atualizar} = produtoSlice.actions; 
export default produtoSlice.reducer;