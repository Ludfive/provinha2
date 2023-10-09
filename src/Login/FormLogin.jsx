/* import React, { useContext, useState } from "react";
import "./Login.css";
import { Form, Alert } from "react-bootstrap";



export default function LoginForm(props) {
  const [formData, setFormData] = useState({
        nickName: "",
        senha: ""
  });

  const [validated, setValidated] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() && formData.nickName.trim() !== "" && formData.senha.trim() !== "") {
      setUsuario({
        nome: formData.nickName,
        senha: formData.senha,
        logado: true,
      });
      setValidated(true);
    } else {
      setShowError(true);
    }
  };
  
  return (
    
  );
}
 */