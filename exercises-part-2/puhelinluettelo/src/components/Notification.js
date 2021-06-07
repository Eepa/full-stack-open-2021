import React from "react";

const Notification = ({ notification }) => {

    if (notification === null) {
        return null
    }

    const notificationStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if (notification.type === 'error') {
        notificationStyle.color = 'red'
    }

    return (
        <div style={notificationStyle}>
            {notification.message}
        </div>
    )
}

export default Notification
