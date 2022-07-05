import React from 'react'
import styles from '../styles/SignupForm.module.css'
function LoginForm() {
    return (
        <form>
            <div className={styles.signupForm}>
                <h2>Faça o cadastro</h2>
                {/*ERRO */}
                <div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="name">Nome completo:</label>
                        <input type="name" name="nome" id="nome" />
                    </div>
                    <div >
                        <label htmlFor="CPF">CPF:</label>
                        <input type="name" name="cpf" id="cpf" />
                    </div>
                    <div >
                        <label htmlFor="password">Senha:</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div >
                        <label htmlFor="tel">Telefone:</label>
                        <input type="tel" name="tel" id="tel" />
                    </div>
                    <input type="submit" value="CRIAR" />
                </div>

            </div>
        </form>
    )
}

export default LoginForm