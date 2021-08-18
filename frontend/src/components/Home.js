import React from 'react';
import { Link } from 'react-router-dom';

const home = () => (
    <div className="container bg-light">
        <div className="jumbotron mt-5">
            <h1 className="display-4">Welcome to Blg life!</h1>
            <p className="lead">We make all kinds of awsome blog about various topics</p>
            <hr class="my-4"/>
            <p>Click the button below to check out our awesome blog</p>
            <p className="lead">
                <Link className="btn btn-primary btn-lg" to='/blog' role="button">Check out our Blog</Link>
            </p>
        </div>
    </div>
    );
export default home;