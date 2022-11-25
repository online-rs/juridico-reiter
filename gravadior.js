stream = await navigator.mediaDevices.getDisplayMedia({
    audio: true,
    video: {
        mediaSource: "screen", // whole screen sharing
    }

})
recorder = new RecordRTC.RecordRTCPromisesHandler(stream, {
    mimeType: 'video/webm', 
    //    bitsPerSecond: 128000
});

recorder.startRecording();