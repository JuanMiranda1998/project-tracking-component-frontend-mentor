import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='roundedBackground relative px-8 md:pl-40 md:pr-36 overflow-hidden'>
      <Navbar />
      <main className='flex flex-col justify-between 2xl:justify-center md:flex-row-reverse'>
        <div className='mt-2 mb-8 lg:mb-0 lg:mt-0 py-8 lg:py-20 xl:pb-24'>
          <img className='w-full max-w-[400px] md:max-w-[550px] scale-[165%] md:scale-x-[170%] translate-x-[4.5rem] md:translate-x-52 z-0' src="/illustration-devices.svg" alt="devices image" />
        </div>
        <section className='py-6 md:max-w-[500px] lg:py-0'>
          <p className='mt-14 barlow-condensed-regular tracking-[0.2rem] text-base lg:text-base text-[var(--neutral-grayish-blue)] uppercase'>
            <span className='px-[0.65rem] py-[0.2rem] mr-3 rounded-full barlow-condensed-bold text-base text-[var(--neutral-light-grayish-blue)] uppercase tracking-wider bg-[var(--neutral-very-dark-blue)]'>New</span>
            Monograph Dashboard
          </p>
          <h1 className='my-4 md:mt-4 md:mb-6 barlow-condensed-bold text-[2.5rem] md:text-6xl leading-10 text-[var(--neutral-very-dark-blue)] uppercase'>Powerful insights into your team</h1>
          <p className='mb-6 md:mb-12 md:w-72 barlow-regular text-lg leading-6 md:text-base text-[var(--neutral-dark-grayish-blue)]'>Project planning and time tracking for agile teams</p>
          <p className='barlow-condensed-regular tracking-widest md:tracking-[0.2rem] text-[0.9rem] text-[var(--neutral-grayish-blue)] uppercase'><button className='text-sm  tracking-wider text-[var(--neutral-light-grayish-blue)] barlow-condensed-bold uppercase bg-[var(--primary-red)] px-6 py-[0.65rem] rounded-md mr-3 md:mr-5  hover:opacity-50 transition-opacity ease-in duration-150'>Schedule a demo</button>to see a live preview</p>
        </section>
      </main>
    </div>
  )
}

export default App
