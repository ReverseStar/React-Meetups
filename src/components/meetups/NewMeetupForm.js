import React from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import {useRef} from 'react';

function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };
        
        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" name="title" required id="title" ref={titleInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" name="image" required id="image" ref={imageInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        required
                        id="address"
                        ref={addressInputRef}/>
                </div>

                <div className={classes.control}>
                    <label htmlFor="description">Meetup Title</label>
                    <textarea id="description" required rows="5" ref={descriptionInputRef} />
                </div>

                <div className={classes.actions}>
                    <button className={classes.action}>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;
