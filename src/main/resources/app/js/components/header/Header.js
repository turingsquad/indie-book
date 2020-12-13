import React from 'react';
import PropTypes from 'prop-types';
import Auth from "../auth/Auth";
import HeaderAfterAuth from "./HeaderAfterAuth";
import HeaderBeforeAuth from "./HeaderBeforeAuth";

export default function Header(props) {
    const {title} = props;
    const auth = new Auth()
    if (auth.isAuthenticated()) {
        return <HeaderAfterAuth title={"Indie Book"}/>
    } else {
        return <HeaderBeforeAuth title={"Indie Book"}/>
    }
}

Header.propTypes = {
    title: PropTypes.string,
};