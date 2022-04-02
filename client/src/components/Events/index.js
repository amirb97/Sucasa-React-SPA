import React from 'react';
import { Link } from 'react-router-dom';

function Events() {
    const events = [
        {
            id: '1',
            title: 'Sunday Brunch!',
            description: `It's finally back!  We've heard you asking when it'll be back and the answer is April 3rd!
                Join us from 10am-2pm while we serve all you can eat food for $28! Mimosas and Draft Beer for $5 each!
                Kids get in for $15, and all soft drinks are included! We look forward to seeing you on Sundays, and come hungry!`,
            image: require('../../assets/events/brunch.png').default
        },
        {
            id: '2',
            title: 'Pesian New Year Celebration!',
            description: `Nowruz! Join us in our Persian New Year Celebration!
            We will be serving a round of appetizers for your table, a glass of wine, followed by a self-serve Persian Buffet, and a round of desserts!
            Try different unique foods you've never tasted before, get up and dance with our live DJ playing the hits, and sit back and enjoy the show while a professional 
            belly dancer performs multiple dances! Hurry and call in as seating is limited and we are already fully booked!`,
            image: require('../../assets/events/persian-night.jpg').default
        },
        {
            id: '3',
            title: 'Taco Tuesday!',
            description: `Is it Tuesday already??? Join us every Tuesday at dinner for a special price on Street and Crispy Tacos!
            Carnitas, Carne Asade, Pollo Asada, Pastor, Shredded Beef, Ground Beef, Shredded Chicken, and Potato Tacos...... Are you out of breath yet?
            All served at a lower price every Tuesday!`,
            image: require('../../assets/events/taco-tuesday.jpg').default
        }
    ]

    return (
        <div className='row'>
            <h2 className='text-center py-4'>Events!</h2>
            <p className='text-center col-12 mx-auto'>
                Below are some of the upcoming events we plan on hosting!
                Click on any one of them to join the discussion and let us know what you think!
            </p>

            {events.map(event => (
                <Link to={`event/${event.id}`} className='col-12 border border-dark rounded shadow py-2 my-2 mx-auto text-decoration-none text-dark' key={event.id}>
                    <div className='row'>
                        <div className='col-8 row'>
                            <h3 className='text-center h4 my-auto'>{event.title}</h3>
                            <p className='text-center h6'>{event.description}</p>
                        </div>
                        <div className='col-4'>
                            <img width="100%" height="100%" src={event.image} alt='Brunch'></img>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Events;
