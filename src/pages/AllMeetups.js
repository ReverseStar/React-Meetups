import React from "react";
import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
import "../index.css";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            "https://react-meetups-d9725-default-rtdb.firebaseio.com/meetups.json"
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const meetups = [];
                for(const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    };
                    meetups.push(meetup);
                }

                setIsLoading(false);
                setLoadedMeetups(meetups);
            });
    }, []);

    if (isLoading) {
        return (
            <section className="loading">
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <h1>All Meetups Page</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
}

export default AllMeetupsPage;
