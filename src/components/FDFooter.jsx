import React, {Component, Fragment} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class FdFooter extends Component {
    render() {
        return (
            <div className='footer'>
                <ul>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ul>
            </div>
        );
    }
}

export default FdFooter;