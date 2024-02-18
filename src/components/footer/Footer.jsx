import "./footer.scss"

import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="footer">
            <div className="socials">
                <ul>
                    <li>
                        <a href="https://github.com/kuldeep-joshi1212">
                            <i className="bx bxl-github social"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://leetcode.com/kuldeep-joshi/  ">
                            <i className="bx bx-code-alt social"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/kuldeep-joshi1212/">
                            <i className="bx bxl-linkedin social"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://twitter.com/kuldeep_joshi_">
                            <i className="bx bxl-twitter social"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/7355442260">
                            <i className="bx bxl-whatsapp social"></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:kuldeep.kj.joshi@gmail.com">
                            <i className="bx bxl-gmail social"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-note">
                <div>Kuldeep Joshi</div>
            </div>
        </footer>
    </>
  )
}

export default Footer
