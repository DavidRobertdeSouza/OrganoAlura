import './Rodape.css'

const Rodape = () => {
  return (
    <footer className='footer' alt='Fundo do rodapé'>
      <div className='divFooter'>
        <div className='redeSocial'>
          <a href='https://www.facebook.com' target='_blank' rel="noreferrer">
            <img src='/imagens/fb.png' alt='Logo Facebook'></img>
          </a>
          <a href='https://www.twitter.com' target='_blank' rel="noreferrer">
            <img src='/imagens/tw.png' alt='Logo Twitter'></img>
          </a>
          <a href='https://www.instagram.com' target='_blank' rel="noreferrer">
            <img src='/imagens/ig.png' alt='Logo Instagram'></img>
          </a>
        </div>
        <img src='/imagens/logo.png' alt='Logo Organo'></img>
        <h3>Desenvolvido por Alura</h3>
      </div>
    </footer>
  )
}

export default Rodape