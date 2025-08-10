import Logo from '../../assets/images/Logo.png'

export default function ({className}){
  return (
    <img src={Logo} alt="Logo" className={className}/>
  )
}