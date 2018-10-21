import React from 'react';

const Form = () => (
    <form action="javascript:void(0)">
        <label>
            Name
            <input type="text" name="contact_name" />
        </label>
        <label>
            Address Line 1
            <input type="text" name="contact_add1" />
       </label>
       <label>
           Address Line 2
           <input type="text" name="contact_add2" />
       </label>
       <label>

           <input type="text" name="contact_town" />
       </label>
       <label>
           Country
           <input type="text" name="contact_country" />
       </label>
       <label>
           Postcode
           <input type="text" name="contact_postcode" />
       </label>
       <label>
           Telephone
           <input type="tel" name="contact_tel" />
       </label>
       <label>
           Email
           <input type="email" name="contact_email" />
       </label>
       <button type="submit" name="submit">Add</button>
    </form>
);

export default Form;
