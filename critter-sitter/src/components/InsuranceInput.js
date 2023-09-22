import React from "react";

function InsuranceInput({ insurance, setInsurance, petInfo }) {
    return (
        <>
        <label htmlFor="insurance">
            Does {petInfo.name} have pet insurance?
        </label>
        <input
            type="text"
            name="insurance"
            id="insurance"
            value={insurance}
            onChange={(e) => setInsurance(e.target.value)}
        />
        </>
    );
    }