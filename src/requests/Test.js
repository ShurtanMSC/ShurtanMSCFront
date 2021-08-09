import React from 'react';
import SuperAdminRequests from "./SuperAdminRequests";

function Test(props) {
    function testRequests() {
        let data = {
            id: 9992,
            name: "Feruza"
        }

        SuperAdminRequests.getMiningSystem(92225)
            .then(res =>
                console.log(res)
            ).catch(error =>
            console.log(error))
    }

    return (
        <div>
            <button onClick={testRequests} className="requestButton">
                Click me !
            </button>
        </div>
    );
}

export default Test;