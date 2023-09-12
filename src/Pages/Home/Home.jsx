import './Home.css'

const Home = () => {
  return (
    <div className='section'>
      <div className='home'>
        <section className='left-home'>
          <img
            src='src/assets/images/photo.png'
            alt='photo'
          />
        </section>
        <section className='right-home'>
          <h2 className='name'>
            hi, i&apos;m <span className='myname'>sonia hiltner. </span> a web
            developer.
          </h2>
          <p> and i love to create beautiful things.</p>
        </section>
      </div>
    </div>
  )
}

export default Home
