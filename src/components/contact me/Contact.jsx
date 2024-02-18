import "./contact.scss"
import {useEffect} from "react";

import React from 'react'
import Footer from "../footer/Footer";

const Contact = () => {
    const [items, setItems] = React.useState([]);
    useEffect(() => {
        setItems(document.querySelectorAll(".field"));
        // console.log(items);

    }, []);
    items.forEach((item) => {
        // console.log(item);
        let input = item.querySelector("input");
        // console.log(input);
        if (input) {
            input.addEventListener("focus", () => {
                let span = item.querySelector("span");
                if (span) {
                    span.style.display = "none";
                }
            });
            input.addEventListener("blur", () => {
                console.log(input.value);
                let span = item.querySelector("span");
                if (span && !input.value) {
                    span.style.display = "block";
                }
            });

        }
    });
  return (
    <>
        <div className="contact">
            <div className="container">
                <h1>Contact Me</h1>
                <form >
                    <div className="contact-form">
                        <div className="field">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name"/>
                            <span>Enter your name</span>
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email"/>
                            <span>Enter your email</span>
                        </div>
                        <div className="field message" >
                            <label htmlFor="message">Message</label>
                            <input type="message" className="message-inp" name="message" id="message"/>
                            <span>Enter your message</span>
                        </div>

                    </div>


                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        <footer><Footer/></footer>
    </>
  )
}

export default Contact
