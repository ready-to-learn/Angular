import { Component } from '@angular/core';

@Component({
    selector : "events-list",
    templateUrl : "./events-list.component.html"

    /* Note the dollar sign being escaped withing the string literal.
        But not to be escaped if its in HTML
    */
    // template : 
    // `
    // <div>
    //     <h1>Upcoming Angular Events</h1>
    //     <hr>
    //     <div class="well hoverwell thumbnail">
    //     <h2>{{event.name}}</h2>
    //     <div>Date: {{event.date}}</div>
    //     <div>Time: {{event.time}}</div>
    //     <div>Price: \${{event.price}}</div>
    //     <div>
    //     <span> Location: {{event.location.address}}</span>
    //     <span>&nbsp;</span>
    //     <span>{{event.location.city}}, {{event.location.country}}</span>
    //     </div>
    // </div>
    // `
})

export class EventsListComponent{

    event ={
        id: 1,
        name: "Angular connect",
        date: "22/07/2018",
        time: "10:45 pm",
        price: 299.99,
        imageurl: "/assets/images/angularconnect-shield.png",
        location: {
            address: "1000 ST",
            city: "Tokyo",
            country: "Japan"
        }


    }
}