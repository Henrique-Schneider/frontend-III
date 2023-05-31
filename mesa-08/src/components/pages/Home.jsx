import styles from './Home.module.css'
function Home() {

  function handleSubmit(event) {
    event.preventDefault();
  }
  return ( 
    <div className={styles.container}>
      <h1>Média de Alunos por Disciplina</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="container_input">
          <select>
            <option selected disabled>
              Selecione uma disciplina
            </option>
            <option value="database">Banco de Dados</option>
            <option value="backend">Desenvolvimento Backend</option>
            <option value="frontend">Desenvolvimento Frontend</option>
            <option value="devops">Devops</option>
          </select>
          <input />
        </div>
        <input type="submit" value="Salvar" />
      </form>

      <div className={styles.container}>
        <table border="1" className={styles.line_title}>
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Quantidade de Alunos</th>
              <th>Média das notas dos alunos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Banco de Dados</td>
              <td>0</td>
              <td>0</td>
            </tr>

            <tr>
              <td>Desenvolvimento Frontend</td>
              <td>0</td>
              <td>0</td>
            </tr>

            <tr>
              <td>Desenolvimento Backend</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
   );
}

export default Home;