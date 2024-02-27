import { useEffect } from 'react';

function Meta(props) {
    var title = "Little Lemon";

    useEffect(() => {
        switch(props.page) {
            case "reservation":
                title = "Little Lemon - Reservation";
                break;
            default:
                break;
        }

        document.title = title;
    }, [title])

    return (
        <head>
            <meta name="desciption" content="Little Lemon is a charming
            neighborhood bistro that servers simple food and classic
            cocktails in a lively but causal enviroment. The resturant
            features a locally-sourced menu with daily specials."/>

            <meta name="og:title" content="Little Lemon Restaurant"/>

            <meta name="og:description" content="Little Lemon is a charming
            neighborhood bistro that servers simple food and classic
            cocktails in a lively but causal enviroment. The resturant
            features a locally-sourced menu with daily specials."/>
        </head>
    )
}

export default Meta;