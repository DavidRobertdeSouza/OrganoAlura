import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
  return(
    <section className='formulario'>
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label='Nome' placeholder='Digite seu nome' tipo='text'/>
        <CampoTexto label='Cargo' placeholder='Digite seu cargo' tipo='text'/>
        <CampoTexto label='Imagem' placeholder='Informe o endereço da imagem' tipo='text'/>
      </form>
    </section>
  )
}

export default Formulario