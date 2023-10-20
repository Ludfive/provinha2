//import TelaLogin from "./Login/TelaLogin";
import TelaCadastroCliente from "./telasCadastro/TelaCadastroCliente";
import TelaCadastroProduto from "./telasCadastro/TelaCadastroProduto";
import TelaCadastroFornecedores from "./telasCadastro/TelaCadastroFornecedores";
import TelaCadastroCategoria from "./telasCadastro/TelaCadastroCategoria";
import Tela404 from "./telasCadastro/Tela404";
import TelaMenu from "./telasCadastro/TelaMenu";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";//componente

//import React, { useState } from 'react';


function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
                  
                <Route path="/clientes" element={<TelaCadastroCliente/>} />
                <Route path="/produtos" element={<TelaCadastroProduto/>} />  
                <Route path="/fornecedores" element={<TelaCadastroFornecedores/>}/>
                <Route path="/categoria" element={<TelaCadastroCategoria/>}/>
                  
                <Route path="/" element={<TelaMenu/>}/>
                <Route path="*" element={<TelaMenu/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
