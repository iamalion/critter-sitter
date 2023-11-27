import React from 'react';
import { db } from './../firebase';

function HealthForm() {
    return (
        <>
        <p>Let's get to know your pet's health a little more...</p>
        <form>
            <input type="text" placeholder="Vet Name" name="vetName" required />
            <input type="checkbox" name="allergies" value="allergies" />
            <input type="text" name="medications" value="medications" />
        </form>
        </>
    )
}

export default HealthForm;