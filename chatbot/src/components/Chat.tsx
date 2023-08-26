'use client';

import { FunctionComponent } from 'react';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import ChatHeader from './ChatHeader';

const Chat: FunctionComponent = () => {

    return (
        <div className="container-chat">
            <div className='w-full h-full flex flex-col'>
                <ChatHeader/>
                <div className='flex flex-col wrapper-chat'>
                    <ChatMessages className='px-2 py-3'/>
                    <ChatInput className='px-4'/>
                </div>
            </div>
        </div>
    );
};

export default Chat;