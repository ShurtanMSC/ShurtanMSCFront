import React from 'react';
import SuperAdminRequests from "./SuperAdminRequests";

function Test(props) {
    function testRequests() {
        let data = {
            gasCompositionId: 17,
            miningSystemId: 1,
            molarFraction: 99,
            id:16
        }

        SuperAdminRequests.deleteMiningSystemGasComposition(16)
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