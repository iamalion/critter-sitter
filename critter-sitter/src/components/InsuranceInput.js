import React from "react";

function InsuranceInput({ insuranceSelect, setInsuranceSelect, insuranceProvider, setInsuranceProvider, petInfo }) {
    <label htmlFor="insuranceSelect">Does {petInfo.name} have pet insurance? </label>
    return (
        <>
        <input
            type="radio"
            name="insurance"
            id="insuranceYes"
            value="yes"
            onChange={(e) => setInsuranceSelect(e.target.value)}
        />
        <label htmlFor="yes">Yes</label>
        <input
            type="radio"
            name="insurance"
            id="insuranceNo"
            value="no"
            onChange={(e) => setInsuranceSelect(e.target.value)}
        />
        <label htmlFor="no">No</label>
        <br />
        {insuranceSelect === "yes" ? (
            <>
            <label htmlFor="insuranceProvider">
                What's the name of the insurance provider?
            </label>
            <input
                type="text"
                name="insuranceProvider"
                id="insuranceProvider"
                value={petInfo.insuranceProvider}
                onChange={(e) => setInsuranceProvider(e.target.value)}
            />
            </>
        ) : (
            <></>
        )}
        </>
    )
}

export default InsuranceInput;