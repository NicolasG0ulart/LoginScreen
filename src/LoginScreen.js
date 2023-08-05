import React, {useState} from "react"
import * as S from "./LoginScreenStyles"
import { createGlobalStyle } from "styled-components"

//images
import Image from "./assets/image-left.svg"
import IcoGoogle from "./assets/icon-google.svg"


export default function LoginScreen(){
  const [password, setPassword] = useState("")
  const [passwordClass, setPasswordClass] = useState(false)


// FUNÇÃO PARA PEGAR O VALOR DO INPUT DA SENHA

  function handleChange(event){
    setPassword(event.target.value)
    console.log(password)
  }

// FUNÇÃO DE VALIDAR SE A SENHA É VÁLIDA

  function testeSenha(event){
    event.preventDefault()
    if(password.length >= 8){
    }else{
      const senha = document.querySelector("#input-senha")
      
      senha.value = null
      senha.placeholder="A senha precisa ter no mínimo 8 caracteres"
      setPasswordClass(true)
    }
  }

  const GlobalStyles = createGlobalStyle`
  *{
    box-sizing:border-box;
    margin: 0;
    padding: 0;
  }
  `

  return(
    <>
      <GlobalStyles/>

      <S.ScreenLogin>
        <S.ImageLeft src={Image} alt="imagem ilustrativa de uma tela de login"/>
        
        <S.SectionLogin>
          <p className="text-welcome">Bem vindo de volta</p>
          <h2 className="text-login">Faça login na sua conta</h2>


          <form onSubmit={testeSenha}>
            <p className="text-email">E-mail</p>
            <input className="input-email" type="email" placeholder="Digite seu e-mail"/>

            <p className="text-senha">Senha</p>
                <input
                  onChange={handleChange}
                  value={password}
                  id="input-senha"
                  className={passwordClass ? "input-senha-invalid" : "input-senha"}
                  type="password"
                  placeholder="********"
                />

            <div className="remember-div">
              <div>
                <input
                  id="remember"
                  className="input-remember"
                  type="radio"
                />
                <label for="remember">Lembre de mim</label>
              </div>

              <p className="forgot-password">Esqueceu sua senha?</p>
            </div>

            <button className="button-enter">Entrar</button> 
          </form>

          <button className="button-google">
              <img src={IcoGoogle} alt="logo da google"/>
              Ou faça login com o Google
          </button>
        </S.SectionLogin>
      </S.ScreenLogin>
    </>
  )
}