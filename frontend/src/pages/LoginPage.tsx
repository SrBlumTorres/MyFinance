import AppTitleName from "../components/AppTitleName";
import Form from "../components/Form";
import Logo from "../components/Logo";

function LoginPage() {

  return (
    <>
      <div className="min-w-full min-h-screen border-2 border-solid">
        <div className="flex gap-1 items-center">
          <Logo size="60"/>
          <AppTitleName />
        </div>

        <div className="flex">
          <section className="flex flex-col w-1/2">
            <div className="w-3/5 m-auto">
              <h1 className="text-center">Sign in</h1>
              <p className="text-center mb-8">Welcome to MyFinance App, log in an enjoy of your best finance management</p>
              <Form />
            </div>
          </section>

          <section className="w-1/2">
            <h1>FOTO</h1>
          </section>
        </div>
        
      </div>
    </>
  )

}

export default LoginPage;