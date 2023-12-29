// ChatBot.jsx
import React from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';
import '../App.css';

const ChatBot = () => {
    return (
        <>
            <div className="chatbot-container">
                <div className="header">
                    <h1>ChatBot</h1>
                </div>
                <div className="recording-section">
                    <ReactMediaRecorder
                        audio
                        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                            <div className="recording-controls">
                                <p>Status: <span className='special' style={{ textTransform: 'uppercase' }}>{status}</span></p>
                                <p>Tap on <span className='special'>Start Recording</span> to start recording.</p>
                                <hr />
                                <button
                                    className={`record-button ${status === 'recording' ? 'recording-animation' : ''}`}
                                    onClick={startRecording}
                                >
                                    {status === 'recording' ? 'Recording Audio' : 'Start Recording'}
                                </button>
                                <button className="stop-button" onClick={stopRecording}>Stop Recording</button>
                                {status === 'stopped' && mediaBlobUrl && (
                                    <audio className="audio-player" src={mediaBlobUrl} controls autoPlay loop />
                                )}
                            </div>
                        )}
                    />
                </div>
            </div>
        </>
    );
};

export default ChatBot;
