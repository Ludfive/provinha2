import TelaCadastroCategoria from "./telasCadastro/TelaCadastroCategoria";
import TelaCadastroCliente from "./telasCadastro/TelaCadastroCliente";
import TelaCadastroProduto from "./telasCadastro/TelaCadastroProduto";
import TelaCadastroFornecedores from "./telasCadastro/TelaCadastroFornecedores";
import Tela404 from "./telasCadastro/Tela404";
import TelaMenu from "./telasCadastro/TelaMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        
          <Route path="/categoria" element={<TelaCadastroCategoria/>}/>
          <Route path="/clientes" element={<TelaCadastroCliente/>} />
          <Route path="/produtos" element={<TelaCadastroProduto/>} />  
          <Route path="/fornecedores" element={<TelaCadastroFornecedores/>}/>
          
          <Route path="/" element={<TelaMenu/>}/>
          <Route path="*" element={<Tela404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
