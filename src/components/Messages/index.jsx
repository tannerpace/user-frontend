import React from 'react'



const MessageList = () => {


    const messages = [
        { name: 'Samuel', message: 'Knock Knock' },
        { name: 'Bradley', message: 'Whos there?' },
        { name: 'Samuel', message: 'Knock Knock' },
        { name: 'Bradley', message: 'Whos there?' },
        { name: 'Samuel', message: 'Knock Knock' },
        { name: 'Bradley', message: 'Whos there?' },
        { name: 'Samuel', message: 'Knock Knock' },
        { name: 'Bradley', message: 'Whos there?' },
        { name: 'Samuel', message: 'Knock Knock' }]


    return (
        <div className="message-list">
            {messages?.map((message, index) => {
                return (
                    <div key={index} className="message">
                        <div className="message-header">
                            <div className="message-header-name">message.name</div>
                            <div className="message-header-time">message.time</div>
                        </div>
                        <div className="message-body">message.message</div>
                    </div>
                )
            })}
        </div>
    )
}


export default MessageList
