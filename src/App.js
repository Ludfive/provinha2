//import TelaLogin from "./Login/TelaLogin";
import TelaCadastroCliente from "./telasCadastro/TelaCadastroCliente";
import TelaCadastroProduto from "./telasCadastro/TelaCadastroProduto";
import TelaCadastroFornecedores from "./telasCadastro/TelaCadastroFornecedores";
import TelaCadastroCategoria from "./telasCadastro/TelaCadastroCategoria";
import Tela404 from "./telasCadastro/Tela404";
import TelaMenu from "./telasCadastro/TelaMenu";
//import React, { useState } from 'react';

import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

              
              <Route path="/clientes" element={<TelaCadastroCliente/>} />
              <Route path="/produtos" element={<TelaCadastroProduto/>} />  
              <Route path="/fornecedores" element={<TelaCadastroFornecedores/>}/>
              <Route path="/categoria" element={<TelaCadastroCategoria/>}/>
                
              <Route path="/" element={<TelaMenu/>}/>
              <Route path="*" element={<Tela404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
