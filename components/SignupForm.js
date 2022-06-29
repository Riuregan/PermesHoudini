import React from 'react'
import styles from '../styles/LoginForms.module.css'
function LoginForm() {
    return (
        <form className={styles.Signup}>
            <div className={styles.SignupForm}>
                <h2>Faça o cadastro</h2>
                {/*ERRO */}
                <div className={styles.FormGroup}>
                    <label htmlFor="CPF">CPF:</label>
                    <input type="number" name="cpf" id="cpf" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input type="submit" value="LOGIN" />
            </div>
        </form>
    )
}

export default LoginForm