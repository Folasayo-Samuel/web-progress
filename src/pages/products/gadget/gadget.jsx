import GadgetNavbar from '../../../component/GadgetNavbar/GadgetNav'
import EightPics from '../../../assest/images/Eight.png'
import { FaShieldAlt, FaGripLines, FaCheckCircle } from 'react-icons/fa'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter, Link } from 'react-router-dom'
import Button from '../../../component/Button/Button'

const GadgetInsurance = () => {
  return (
    <div className="container" style={{ position: 'relative' }}>
      <GadgetNavbar />
      <div className="row" style={{ positiion: 'relative' }}>
        <div className="col-6" style={{ marginTop: '200px' }}>
          <h2>
            <span className="Ins">Gadg</span>et Insurance
          </h2>
          <p>
            Protecting your valuable assets should be a commitment everyone
            should make regardless if it's just your mobile phones, it's still
            your asset!
          </p>
          <p>
            This is why we've partnered with NSIA insurance Limited to design
            and ensure adequate cover for your treasured gadgets.
          </p>
          <BrowserRouter>
            <form>
              <Link to="/login" className="">
                <Button className="loginthree">Get Started</Button>
              </Link>
            </form>
          </BrowserRouter>
        </div>
        <div className="col-6 hide-md-lg">
          <div
            className="bg-white text-dark"
            style={{
              width: '50px',
              height: '40px',
              position: 'absolute',
              top: '0',
              left: '1',
              right: '1',
              bottom: '1',
              zIndex: '99',
              marginTop: '230px',
              marginLeft: '-25px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FaShieldAlt style={{ width: '90px' }} />
            {/* <FontAwesomeIcon icon={['fas', 'shield-alt']} 
                    mask={['fas', 'circle']} style={{width:'90px'}} /> */}
          </div>

          <div className="col-sm">
            <img
              src={EightPics}
              alt="apple gadget"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>

        <div className="scope pt-4">
          <h3 className="text-center">
            Scope of{' '}
            <span className="co">
              Cover {/*<FontAwesomeIcon icon={['fas', 'grip-lines']} />*/}{' '}
              <FaGripLines />
            </span>
          </h3>
          <p className="text-center pb-4">
            This All-risk policy covers against accidental and material damages
            &amp; loss to the device which includes:{' '}
          </p>
        </div>
        <div className="row text-center">
          <div className="col">
            {/*<FontAwesomeIcon icon={['far', 'fa-check-circle']} />*/}{' '}
            <FaCheckCircle />
            <p>Material Damages including screens, panels and motherboard</p>
          </div>
          <div className="col">
            {/* <FontAwesomeIcon icon={['far', 'fa-check-circle']} fixedWidth /> */}
            <FaCheckCircle />
            <p>Fire, Flood, storm and other insured perils.</p>
          </div>
          <div className="col">
            {/* <FontAwesomeIcon icon={['far', 'fa-check-circle']} fixedWidth /> */}
            <FaCheckCircle />
            <p>Theft/burglary</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GadgetInsurance
