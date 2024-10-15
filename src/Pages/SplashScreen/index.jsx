import Container from 'react-bootstrap/Container';
import isologotype from '../../assets/splash-screen/isologotype.svg';
import footprints from '../../assets/splash-screen/footprints.svg';
import './splash-screen.scss';

const SplashScreen = () => {
  return (
      <div className='vh-100 vw-100 custom-bg-primary'>
        <Container className="d-flex postion-relative">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((optionNumber) => (
            <div className= {`mx-3 position-absolute option-${optionNumber}`} key={optionNumber}>
              <img className="img-fluid" src={footprints} alt="footprints" />
            </div>
          ))}
        </Container>

        <Container className='d-flex text-white align-items-center justify-content-center position-relative'>
          <img className="img-fluid position-absolute logo-position" src={isologotype} alt="isologotype" />
        </Container>
      </div>
  )
}

export default SplashScreen;