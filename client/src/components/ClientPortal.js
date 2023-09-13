import React from "react";

export default function ClientPortal() {
  return (
    <>
      <h1 className="text-4xl text-center mt-6">Client Portal</h1>
      <div id="portalContainer" class="flex">
        {/* {{! Client Contact Info }} */}
        <div id="contactInfoContainer" class="text-center p-3">
          <h3>My Contact Info:</h3>
          <div id="contactInfo" class="text-left p-3 mb-3">
            <h4>
              <span>
                <b>First Name:</b>
                <p>FIRSTNAME</p>
              </span>
            </h4>
            <h4>
              <span>
                <b>Last Name:</b>
                <p>asdfasdf</p>
              </span>
            </h4>
            <h4>
              <span>
                <b>Email:</b>
                <p id="clientEmail">asdfasdf</p>
              </span>
            </h4>
            <h4>
              <span>
                <b>Phone:</b>
                <p id="clientPhone">123123</p>
              </span>
            </h4>
            <h4>
              <span>
                <b>Mailing Address:</b>
                <br />

                <p id="clientStreet">123 whompton St</p>
                <p id="clientCSZ">Atlanta, Georgia ZIP</p>

                {/* {{/if}}
            {{#unless client.street}} */}
                <p> </p>
                {/* {{/unless}} */}
              </span>
            </h4>
            <h4 id="contactUpdateSuccessMsg">
              Your contact info has been successfully updated.
            </h4>
          </div>

          {/* {{! UPDATE CONTACT FORM }}
      <form id="updateContactForm" class="text-left form" style="display:none">
        <input
          id="contactEmail"
          type="text"
          class="form-control w-100"
          value={{client.email}}
        />
        <label for="contactEmail" class="form-text">Email</label>
        <input
          id="contactPhone"
          type="text"
          class="form-control w-100"
          value={{client.phone}}
        />
        <label for="contactPhone" class="form-text">Phone</label>
        {{#unless client.street}}
          <input
            id="contactStreet"
            type="text"
            class="form-control w-100"
            value=""
          />
        {{/unless}}
        {{#if client.street}}
          <input
            id="contactStreet"
            type="text"
            class="form-control w-100"
            value={{client.street}}
          />
        {{/if}}
        <label for="contactStreet" class="form-text">Street Address</label>
        <div class="flex">
          <div class="flex flex-column w-50">
            {{#unless client.city}}<input
                id="contactCity"
                type="text"
                class="form-control w-100"
                value=""
              />
            {{/unless}}
            {{#if client.city}}
              <input
                id="contactCity"
                type="text"
                class="form-control w-100"
                value={{client.city}}
              />
            {{/if}}
            <label for="contactCity" class="form-text">City</label>
          </div>
          <div class="flex flex-column w-25 px-2">
            <select
              id="contactState"
              name="state"
              class="form-select form-control w-100"
            >
              <option value={{client.state}}>{{client.state}}</option>
              <option value="AK">AK</option>
              <option value="AL">AL</option>
              <option value="AR">AR</option>
              <option value="AZ">AZ</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DC">DC</option>
              <option value="DE">DE</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="IA">IA</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="MA">MA</option>
              <option value="MD">MD</option>
              <option value="ME">ME</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MO">MO</option>
              <option value="MS">MS</option>
              <option value="MT">MT</option>
              <option value="NC">NC</option>
              <option value="ND">ND</option>
              <option value="NE">NE</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NV">NV</option>
              <option value="NY">NY</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VA">VA</option>
              <option value="VT">VT</option>
              <option value="WA">WA</option>
              <option value="WI">WI</option>
              <option value="WV">WV</option>
              <option value="WY">WY</option>
            </select>
            <label for="contactState" class="form-text">State</label>
          </div>
          <div class="flex flex-column w-25">
            {{#unless client.zip}}
              <input
                id="contactZip"
                type="text"
                class="form-control w-100"
                value=""
              />
            {{/unless}}
            {{#if client.zip}}
              <input
                id="contactZip"
                type="text"
                class="form-control w-100"
                value={{client.zip}}
              />
            {{/if}}
            <label for="contactZip" class="form-text">Zip</label>
          </div>
        </div>
        <div class="text-center">
          <button id="updateContactSubmitBtn" class="btn text-light">Save And
            Close</button></div>
      </form> */}
          <button id="contactUpdateBtn" class="btn btm-xs text-light">
            Update Contact Info
          </button>
          <button id="changePasswordBtn" class="btn text-light">
            Change Password
          </button>
          {/* {{! UPDATE PASSWORD FORM }} */}
          <form id="updatePasswordForm" class="text-left form">
            <h4>New password:</h4>
            <input id="newPassword" type="text" class="form-control w-100" />
            <div class="text-center">
              <button id="updatePWSubmitBtn" class="btn">
                Submit
              </button>
            </div>
          </form>
          <h5 id="passwordUpdateSuccessMsg">
            Your password has been successfully updated.
          </h5>
        </div>
        <div id="billingContainer" class="text-center p-3">
          <h3>Account Statement:</h3>

          <div id="statementContainer" class="text-left p-3 mb-3">
            {/* {{#unless invoices}} */}
            <p class="text-center">No outstanding charges</p>
            {/* {{/unless}} */}
          </div>
          {/* {{#if invoices}} */}
          <div
            id="balanceContainer"
            class="flex justify-content-evenly align-items-center"
          >
            <div class="flex">
              <h3>Total Balance Due:</h3>
              <h3 id="totalBalance" class="px-3">
                CHarges
              </h3>
            </div>
            <a href="/ClientPortal/pay">
              <button id="makePaymentBtn" class="btn btn-lg text-light h-50">
                Make A Payment
              </button>
            </a>
          </div>
          {/* {{/if}} */}
        </div>
        <div id="myEventsContainer" class="text-center p-3">
          <h3>My Upcoming Events:</h3>
          <div id="eventContainer" class="text-center p-3 mb-3">
            <p>No upcoming events</p>
          </div>
        </div>
      </div>
    </>
  );
}
