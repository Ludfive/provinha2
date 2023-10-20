import { useState } from "react";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { atualizar,adicionar } from "../../redux/fornecedorReducer";

export default function FormCadFornecedor(props) {

    const fornecedorVazio = {
        nome:'',
        cnpj:'',
        produto:'',
        estado:'',
    }
    const estadoInicialFornecedor = props.fornecedorParaEdicao;
    const [fornecedor, setFornecedor] = useState(estadoInicialFornecedor);
    const [formValidado, setFormValidado] = useState(false);
    const {status,mensagem,listaFornecedores} = useSelector(state=>state.fornecedor);
    const dispatch = useDispatch();

    function manipularMudancas(e){
        const componente = e.currentTarget;
        console.log(componente.value)
        setFornecedor({...fornecedor,[componente.name]:componente.value});
    }

    function manipularSubmissao(e){
        var teste = 0;
        const form = e.currentTarget; 
        if (form.checkValidity()){
    
            if(!props.modoEdicao){
                for(var i = 0; i < props.listaFornecedores.length; i++)
                    if (props.listaFornecedores[i].cnpj === fornecedor.cnpj)
                        teste = teste + 1;
                if (teste === 0){
                    dispatch(adicionar(fornecedor));
                    props.setMensagem('Fornecedor incluído com sucesso');
                    props.setTipoMensagem('success');
                    props.setMostrarMensagem(true);
                }
                    
                else
                    alert("Impossivel cadastrar fornecedores com o mesmo cnpj!");
            }
            else{

                dispatch(atualizar(fornecedor));
                props.setModoEdicao(false);
                props.setFornecedorParaEdicao(fornecedorVazio);                
            }
            setFornecedor(fornecedorVazio); 
            setFormValidado(false);
        }
        else{
            setFormValidado(true);
        }

        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <Container>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Nome Completo:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="Informe o nome completo" 
                                    id="nome" 
                                    name="nome" 
                                    value={fornecedor.nome}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="CNPJ:"
                                className="mb-3"
                            >

                                <Form.Control 
                                    type="text" 
                                    placeholder="000.000.000-00" 
                                    id="cnpj" 
                                    name="cnpj" 
                                    value={fornecedor.cnpj}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o cnpj!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                
            
                <Row>
                    <Col md={5}>
                        <Form.Group>
                            <FloatingLabel
                                label="Produto:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="..." 
                                    id="produto" 
                                    name="produto" 
                                    onChange={manipularMudancas}
                                    value={fornecedor.produto}
                                    required
                                    />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o produto!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                 
                    <Col md={5}>
                        <FloatingLabel controlId="floatingSelect" label="UF:">
                            <Form.Select 
                                aria-label="Unidades Federativas brasileiras" 
                                id='uf'
                                name='uf'
                                onChange={manipularMudancas}
                                value={fornecedor.uf}
                                requerid>
                                <option value="SP" selected>São Paulo</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                
                <Row>
                    <Col md={6} offset={5} className="d-flex justify-content-end">
                        <Button type="submit" variant={"primary"}>{props.modoEdicao ? "Alterar":"Cadastrar"}</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={() => {
                                props.exibirFormulario(false)
                            }
                        }>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}