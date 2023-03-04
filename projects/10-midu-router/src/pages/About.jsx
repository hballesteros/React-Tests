import { Link } from '../Link'

export default function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1367645473/XMWxG95t_400x400' alt='Foto de H.B.' />
        <p>¡Hola! Me llamo Hugo Ballesteros y estoy creando un clon de React Router.</p>
      </div>
      <Link to='/'>Ir al Home</Link>
    </>
  )
}
