import React from "react";

const Notification = ({message, styleOption}) => {
    const classNameToInsert = `notification ${styleOption}`
    
    if(message === null) {
        return null
    }

    return(
        <div className={classNameToInsert}>
            {message}
        </div>
    )
}

export default Notification;