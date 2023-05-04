import { React, useState } from "react";

import "./formulario.css";

export default function Formulario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [termosprivacidade, setTermosprivacidade] = useState(false);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !cpf || !telefone || !cep || !termosprivacidade) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    let result = await fetch("https://performanceoc1.herokuapp.com/users", {
      method: "post",
      body: JSON.stringify({
        name,
        email,
        cpf,
        telefone,
        cep,
        termosprivacidade,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Data saved succesfully");
      setName("");
      setEmail("");
      setCpf("");
      setTelefone("");
      setCep("");
      setTermosprivacidade(false);
    } else {
      alert("Preencha todos os campos corretamente");
    }
  };

  const handleCheckboxChange = (e) => {
    setTermosprivacidade(e.target.checked);
  };

  return (
    <div className="container">
      <div className="content">
        <div id="cadastro">
          <form method="post" action="">
            <h1>Performance Organização & Competência</h1>

            <p>
              <label>Seu nome completo</label>
              <input
                id="nome_cad"
                name="name"
                required="required"
                type="text"
                placeholder="nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </p>

            <p>
              <label>Seu e-mail</label>
              <input
                id="email_cad"
                name="email"
                required="required"
                type="email"
                placeholder="contato@htmlecsspro.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </p>

            <p>
              <label>Cpf ou Cnpj</label>
              <input
                id="cpf_cad"
                name="cpf"
                required="required"
                type="cpf"
                placeholder="82576135420"
                value={cpf}
                onChange={(event) => setCpf(event.target.value)}
              />
            </p>

            <p>
              <label>Telefone</label>
              <input
                id="telefone_cad"
                name="telefone"
                required="required"
                type="tel"
                placeholder="XXXXX-XXXX"
                value={telefone}
                onChange={(event) => setTelefone(event.target.value)}
              />
            </p>

            <p>
              <label>Cep</label>
              <input
                id="cep_cad"
                name="cep"
                required="required"
                type="cep"
                placeholder="00082-100"
                value={cep}
                onChange={(event) => setCep(event.target.value)}
              />
            </p>

            <label className="checkbox">
              <input
                type="checkbox"
                required="required"
                name="termoprivacidade"
                checked={termosprivacidade}
                onChange={handleCheckboxChange}
              />
              <a
                href="https://drive.google.com/file/d/1Hr-F94CAvIg1ENZu816jRHRyVqAiJSXQ/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Termos de Privacidade
              </a>
            </label>
            <label className="checkbox">
              <input
                type="checkbox"
                required="required"
                name="termoprivacidade"
                checked={termosprivacidade}
                onChange={handleCheckboxChange}
              />
              <a
                href="https://drive.google.com/file/d/1OOxpjgJljfBqoNj2o8YAW3r3VHY05wmA/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Condições de Adesão
              </a>
            </label>

            <p>
              <button type="submit" onClick={handleOnSubmit}>
                Enviar
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
