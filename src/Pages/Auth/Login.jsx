import bg from '/src/Images/happy_tiny_classroom_background.png'
import logo from '/src/Images/temporary_logo_full.png'

function LoginPage() {
    const myStyle={
        backgroundImage:
        `url(${bg})`,
        minHeight:'100vh', 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return(
     
<div className="background flex h-full flex-col justify-center items-center" style={myStyle}>
  <div className="bg-white rounded-lg w-fit px-8 sm:px-16 py-12 m-2">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src={logo} alt="Aulab Logo"/>
    <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Ingresa a Tu Cuenta Aulab</h1>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Correo Electronico</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Clave</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-orange-500 hover:underline">Se te olvido tu clave?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Login
        </button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Contactanos haciendo 
      <a href="#" className="font-semibold leading-6 text-sky-600 hover:text-indigo-500"> click aqui</a>
    </p>
  </div>
</div>
</div>
    )
}

export default LoginPage