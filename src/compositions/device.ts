const useDevice = () => {
  const playVideoFromCamera = async (
    video: boolean,
    audio: boolean,
    selector: string
  ) => {
    try {
      const constraints = { video: video, audio: audio };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      const videoElement = document.querySelector(selector);
      if (videoElement) {
        (videoElement as any).srcObject = stream;
      }
    } catch (error) {
      console.error("Error opening video camera.", error);
    }
  };
  return {
    openVideo: playVideoFromCamera
  };
};

export default useDevice;
