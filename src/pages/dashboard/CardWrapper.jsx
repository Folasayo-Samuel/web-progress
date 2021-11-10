import classNames from 'classnames'
import PropTypes from 'prop-types'
import { AiOutlineMore } from 'react-icons/ai'
import { BsBell } from 'react-icons/bs'

export default function CardWrapper({ title, wrapped, children }) {
  return (
    <main
      className={classNames('card py-2 border-0 shadow', {
        'flex-grow-1': wrapped,
      })}
    >
      <div className="card-header bg-white p-md-4 d-flex align-items-center justify-content-between">
        <h2 className="fs-3">{title}</h2>
        <div className="d-flex gap-4">
          <BsBell /> <AiOutlineMore />
        </div>
      </div>
      <div class="card-body">{children}</div>
    </main>
  )
}

CardWrapper.defaultProps = {
  title: 'Card Title',
  wrapped: true,
}

CardWrapper.propTypes = {
  title: PropTypes.string,
  wrapped: PropTypes.bool,
}
