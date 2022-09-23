import Button from "../components/Button"

const Hero = () => {
  return (
    <section className="mt-16">
        <h1 className="text-5xl font-bold">Hi, i'm <span className="dark:text-purple-600">Gustavo Cabral</span></h1>
        <p className="text-4xl my-3 mb-8">Designer learning code</p>
        <Button className=' bg-purple-600 text-white px-6'>Hire me</Button>


    </section>
  )
}

export default Hero