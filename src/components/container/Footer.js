import React from 'react'

const Footer = () => {
  const backToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="footer">
      <div className="footer__content">
        <div>WITH MY SPECIALITIES,</div>
        <div>I AM SURE I CAN CONTRIBUTE TO THE</div>
        <div>GROWTH AND PROFIT OF ANYBODY / ANYWHERE / ANYTIME.</div>
      </div>
      <div className="footer__block--bottom">
        <div className="footer__block--translate">
          <div>
            <span>2020 NTSTUDIO. DEVELOPED BY</span>
            <span style={{ marginLeft: '0.375rem' }}>NHAT TRAN</span>
          </div>
          <div>
            <span>2020 NTSTUDIO. DEVELOPED BY</span>
            <span style={{ marginLeft: '0.375rem' }}>NHAT TRAN</span>
          </div>
        </div>
        <div className="footer__block--translate" onClick={() => backToTopHandler()}>
          <div>BACK TO TOP</div>
          <div>BACK TO TOP</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer