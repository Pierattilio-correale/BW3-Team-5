import { Button, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    
    <Container fluid className="text-center mt-4 bg-info h-100 py-5">
      <h2 className='text-white'>Dove pensavi di andare, bro?</h2>
   
<img
  src="https://pbs.twimg.com/tweet_video_thumb/DQjlHWeWAAEL4wL.jpg"
  alt="Errore"
  className="img-fluid my-3"
  style={{ maxWidth: '500px' }}
/>
<p>Vuoi tornare in <Link to="/">HOME </Link>? <br /> (Lesto, prima che Gigio si incazzi)</p>

    
      <p>
        Puoi anche utilizzare questo{' '}
        <Button variant="danger" onClick={() => navigate('/')}>
          BUTTON
        </Button>
      </p>
   </Container>
  )
}

export default NotFound