import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './Form.css'


function Form() {
    const location = useLocation();
    const state = location.state;
    return (
        <div >
            <h1>CREATE YOUR EVENT</h1>
            <form className="eventForm">
                <div className="firstThird">
                    <label>Select Your NFT Community</label><br />
                    <select name="group">
                        {state.map((stateI) => { return (<option value={stateI} >{stateI}</option>) })}
                    </select>

                    <br />
                    <label>Host:</label><br />
                    <input type="text" name="host" placeholder="Insert a title..."></input>
                    <br />

                    <label>Title:</label><br />
                    <input type="text" name="title" placeholder="Insert a title..."></input>
                    <br />
                    <label>Description</label>

                    <br />
                    <textarea type="text" name="newDescription" rows="10" colus="30" placeholder="Insert a description..."></textarea>
                </div>


                <div className="secondThird">
                    <div>
                        <label do>In-Person</label>
                        <input type="radio" id="offline" name="online" value="false" checked ></input>
                    </div>

                    <div>
                        <label>Online</label>
                        <input type="radio" id="online" name="online" value="true" ></input>
                    </div>
                    <div className="address">
                        <label for="venue">Venue:</label><br />
                        <input type="text" id="venue" name="venue"></input>
                        <br />
                        <label for="street">Street: </label><br />
                        <input type="text" id="street" name="street"></input>
                        <br />
                        <label for="postcode">Postcode: </label><br />
                        <input type="text" id="postcode" name="postcode"></input>
                        <br />
                        <label for="city">City: </label><br />
                        <input type="text" id="city" name="city"></input>


                    </div>


                </div>
                <div className="thirdThird">
                    <h5>Date and Time:</h5>
                    <input type="datetime-local" name="newEventDate"></input>
                    <br />
                    <br />

                    <button className="button" type="submit" >Create Event</button>

                </div>

            </form>
        </div >


    )
}

export default Form;