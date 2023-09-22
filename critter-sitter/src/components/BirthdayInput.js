import React from 'react';
import { generateYears } from '../utils/utils';

function BirthdayInput({ birthdayMonth, setBirthdayMonth,birthdayYear, setbirthdayYear, handleInputChange, petInfo }) {
    return (
        <>
        <label htmlFor="birthday">When is {petInfo.name}'s birthday? Your best guess is fine!</label>
        <select
                name="birthdayMonth"
                id="birthdayMonth"
                value={petInfo.birthdayMonth}
                onChange={handleInputChange}
            >
                <option value="">Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>

            <select
                name="birthdayYear"
                id="birthdayYear"
                value={petInfo.birthdayYear}
                onChange={handleInputChange}
            >
            <option value="">Year</option>
            {generateYears()}
            </select>
        </>
    )
}

export default BirthdayInput