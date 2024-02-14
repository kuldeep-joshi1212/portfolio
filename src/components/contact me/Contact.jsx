import "./contact.scss"

import React from 'react'
import Footer from "../footer/Footer";

const Contact = () => {
  return (
    <>
        <div className="contact">
            <div className="container">
                <h1>Contact Me</h1>
                <form className="contact-form">
                    <ul>
                        <li>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Name"/>
                        </li>
                        <li>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" placeholder="Email"/>
                        </li>
                        <li>
                            <label htmlFor="message">Message</label>
                            <input type="message" name="message" id="message" placeholder="Message"/>
                        </li>
                    </ul>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        <footer><Footer/></footer>
    </>
  )
}

export default Contact
