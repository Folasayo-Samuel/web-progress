import CardWrapper from './CardWrapper'

export default function Profile() {
  return (
    <CardWrapper title="Edit Profile" wrapped={false}>
      <div className="card shadow border-0 m-5">
        <div className="card-body position-relative text-center">
          <div
            className="rounded-circle shadow overflow-hidden"
            style={{
              display: 'inline-block',
              width: '6em',
              height: '6em',
              marginTop: '-3em',
            }}
          >
            <img
              src="/images/obama.jpg"
              className="w-100 h-100"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <form action="">
            <div className="row text-start">
              <div className="col-12 col-md-6">
                <label htmlFor="input-name">Edit Full Name</label>
                <input
                  type="text"
                  id="input-name"
                  className="form-control"
                  placeholder="Barack Obama"
                />

                <label htmlFor="input-password">Edit Password</label>
                <input
                  type="password"
                  id="input-password"
                  className="form-control"
                  placeholder="**************************"
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor="input-address">Edit Address</label>
                <input
                  type="text"
                  id="input-address"
                  className="form-control"
                  placeholder="Malete"
                />

                <label htmlFor="input-phone-number">Edit Phone Number</label>
                <input
                  type="password"
                  id="input-phone-number"
                  className="form-control"
                  placeholder="0805xxxxxxxxx"
                />
              </div>
            </div>
            <div className="d-flex justify-content-end my-4">
              <button className="btn bg-theme d-block px-5 text-white">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </CardWrapper>
  )
}
