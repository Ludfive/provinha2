import {configureStore} from '@reduxjs/toolkit';
import clienteSlice from './clienteReducer';
import produtoSlice from './produtoReducer';
import fornecedorSlice from './fornecedorReducer';
import categoriaSlice from './categoriaReducer';


const store = configureStore({
    reducer:{
        cliente: clienteSlice,
        produto: produtoSlice,
        fornecedor: fornecedorSlice,
        categoria: categoriaSlice,
    }
});

export default store;