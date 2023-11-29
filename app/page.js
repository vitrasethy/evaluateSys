import Image from "next/image";
import LoginForm from "@/components/login/LoginForm";
import Link from "next/link";

export default function Page() {

  return (
    <main className="bg-[url('/stem.jpeg')] bg-cover h-screen">
      <div className="flex flex-col lg:justify-around lg:flex-row h-screen justify-center items-center bg-sky-950/30 backdrop-brightness-75">
        <div className={'mb-10 lg:justify-center lg:flex lg:gap-x-8 lg:items-center'}>
          <div className={'flex lg:flex-col lg:gap-y-4 justify-center gap-x-4'}>
            <Image className={'w-[50px] lg:w-[70px] lg:h-[70px] h-[50px]'} width={0} height={0} src={'/logo-fe.svg'} alt={''}/>
            <Image className={'w-[50px] lg:w-[70px] lg:h-[70px] h-[50px]'} width={0} height={0} src={'/logo-rupp.svg'} alt={''}/>
          </div>
          <hr className="lg:hidden w-[40%] h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"/>
          <div className={'hidden lg:block w-1 h-[70px] bg-gray-100'}></div>
          <div className={'flex lg:flex-col lg:text-6xl gap-x-2 text-xl font-bold text-white'}>
            <div>PROJECT</div>
            <div>EVALUATOR</div>
            <div>SYSTEM</div>
          </div>
        </div>
        <div className={'lg:w-[30%] bg-white w-[70%] px-5 pb-5 rounded'}>
          <div>
            <p className={'text-center font-bold text-2xl my-2'}>Login</p>
          </div>
          <hr className="h-px my-3 bg-gray-400 border-0"/>
          <LoginForm/>
          <p>An admin? <Link className={'text-blue-600 hover:underline focus:text-blue-900'} href={'https://admin.rupp.support/'}>Admin Dashboard</Link></p>
        </div>
      </div>
    </main>
  );
}
