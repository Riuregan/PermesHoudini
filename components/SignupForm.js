import React from 'react'
import styles from '../styles/SignupForm.module.css'
function LoginForm() {
    return (
        <form>
            <div className={styles.signupForm}>
                <h2>Faça o cadastro</h2>
                {/*ERRO */}
                <div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nome completo:</label>
                        <input type="name" name="nome" id="nome" />
                    </div >
                    <div className={styles.formGroup}>
                        <label htmlFor="CPF">CPF:</label>
                        <input type="name" name="cpf" id="cpf" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Senha:</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="tel">Telefone:</label>
                        <input type="tel" name="tel" id="tel" />
                    </div>
                    <div className={styles.signupButtonDirection}></div>
                    <button className={styles.signupButton} > Criar</button>

                </div>

            </div>
        </form >
    )
}

export default LoginForm