import Logo from '../img/logo.png'

const Footer = () => {
  return (
    <footer>
      <img
        src={Logo}
        alt='Logo'
      />
      <span>
        Made with Love and <strong>React.js</strong>
      </span>
    </footer>
  )
}

export default Footer
