import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";

//name, initialState e reducers são atributos obrigatórios
//de um objeto que cria uma 'fatia/slice' da store, resultando em um redutor. 
const categoriaSlice = createSlice({
    name:'categoria',
    initialState:{
        status: ESTADO.OCIOSO,
        mensagem:'',
        listaCategorias:[]
    },
    reducers:{
        //ação ou action adicionar
        adicionar:(state, action)=>{
            state.listaCategorias.push(action.payload);
        },
        remover:(state,action)=>{
            state.listaCategorias = state.listaCategorias.filter(categoria => categoria.id !== action.payload.id);
        },
        atualizar:(state,action)=>{

            const listaTemporariaCategorias = state.listaCategorias.filter(categoria => categoria.id !== action.payload.id);
            state.listaCategorias = [...listaTemporariaCategorias, action.payload.categoria];
        }

    }
});

export const {adicionar,remover,atualizar} = categoriaSlice.actions; 
export default categoriaSlice.reducer;