import { Link } from '../Link'

export default function Page404 () {
  return (
    <>
      <h1>This is NOT fine</h1>
      <div>
        <img src='https://midu.dev/images/this-is-fine-404.gif' alt='Gif del perro This is NOT fine' />
      </div>
      <Link to='/'>Volverl al Home</Link>
    </>
  )
}
