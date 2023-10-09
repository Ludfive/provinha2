import { useState } from "react";
import { Button,Container,Form,Row,Col,FloatingLabel} from "react-bootstrap";
export default function FormCadProduto(props) {
    const produtoVazio = {
        
        nome:'',
        id:'',
        preco:'',
        qtd:'',
        unidade:'',
        dtValidade:'',
        descricao:'',
    }

    const estadoInicialProduto = props.produtoParaEdicao;
    const [produto,setProduto] = useState(estadoInicialProduto);
    const [formValidado,setFormValidado] = useState(false);

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        console.log(componente.value)
        setProduto({...produto,[componente.name]:componente.value});
    }

    function manipularSubmissao(e){
        var teste = 0;
        const form = e.currentTarget; 
        if (form.checkValidity()){
    
            if(!props.modoEdicao){
                for(var i = 0; i < props.listaProdutos.length; i++)
                    if (props.listaProdutos[i].id === produto.id)
                        teste = teste + 1;
                if (teste === 0){
                    props.setListaProdutos([...props.listaProdutos,produto]);
                    props.setMensagem('Produto incluído com sucesso');
                    props.setTipoMensagem('success');
                    props.setMostrarMensagem(true);
                }
                    
                else
                    alert("Impossivel cadastrar produtos com o mesmo id!");
            }
            else{

                props.setListaProdutos([...props.listaProduos.filter((itemProduto)=>itemProduto.id !== produto.id),produto]);
                props.setModoEdicao(false);
                props.setProdutoParaEdicao(produtoVazio);                
            }
            setProduto(produtoVazio); 
            setFormValidado(false);
        }
        else{
            setFormValidado(true);
        }

        e.stopPropagation();
        e.preventDefault();
    }
    return(
        <Container>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col md={8}>
                        <Form.Group>
                            <FloatingLabel
                                label="Nome:"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="nome completo"
                                    id="nome"
                                    name="nome"
                                    value={produto.nome}
                                    onChange={manipularMudancas}
                                    required />
                                   
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                label="id"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="00000" 
                                    id="id" 
                                    name="id" 
                                    onChange={manipularMudancas}
                                    value={produto.id}
                                    required
                                    />
                            
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o Id!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                label="preco"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="number" 
                                    placeholder="" 
                                    id="preco" 
                                    name="preco" 
                                    onChange={manipularMudancas}
                                    value={produto.preco}
                                    required
                                    />
                            
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o preco!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                label="quantidade"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="number" 
                                    placeholder="" 
                                    id="qtd" 
                                    name="qtd" 
                                    onChange={manipularMudancas}
                                    value={produto.qtd}
                                    required
                                    />
                            
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a quantidade!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <FloatingLabel controlId="floatingSelect" label="Unidade:">
                            <Form.Select>
                                     
                                id='unidade'
                                name='unidade'
                                onChange={manipularMudancas}
                                value={produto.unidade}
                                requerid>
                                <option value="m">metros</option>
                                <option value="cm">centimetros</option>
                                <option value="kg">kilos</option>
                                <option value="g">gramas</option>
                            </Form.Select>

                        </FloatingLabel>
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="descricao"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="coloque a descricao" 
                                    id="descricao" 
                                    name="descricao" 
                                    onChange={manipularMudancas}
                                    value={produto.descricao}
                                    required
                                    />
                            
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a descricao!</Form.Control.Feedback>
                        </Form.Group>
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