import React from "react";
import { CommonInput } from "../../styles/Container.style";
import { RadioLabel, RadioButton } from "../../styles/Radio.style";
import { ContainerRow } from "../../styles/Container.style";

function InsuranceInput({ insuranceSelect, setInsuranceSelect, insuranceProvider, setInsuranceProvider, petInfo }) {
    
    return (
        <>
        <ContainerRow>
        <RadioLabel>
            <RadioButton
                type="radio"
                name="insurance"
                id="insuranceYes"
                value="yes"
                onChange={(e) => setInsuranceSelect(e.target.value)}
            />
            {/* <label htmlFor="yes">Yes</label> */}
            Yes
        </RadioLabel>
        <RadioLabel>
            <RadioButton
                type="radio"
                name="insurance"
                id="insuranceNo"
                value="no"
                onChange={(e) => setInsuranceSelect(e.target.value)}
            />
            {/* <label htmlFor="no">No</label> */}
            No
        </RadioLabel>
        </ContainerRow>
        <br />
        {insuranceSelect === "yes" ? (
            <>
            <label htmlFor="insuranceProvider">
                What's the name of the insurance provider?
            </label>
            <CommonInput
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