import { useRef, useState } from "react";
import Webcam from "react-webcam";
import flashIcon from "../../assets/camera_flash.png";
import captureIcon from "../../assets/camera_capture.png";
import transitionIcon from "../../assets/camera_transition.png";

const PhotoCapturePage = () => {
  const webcamRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [flashEnabled, setFlashEnabled] = useState(false);

  const capturePhoto = () => {
    if (flashEnabled) {
      document.body.style.backgroundColor = "white";
      setTimeout(() => {
        document.body.style.backgroundColor = "";
        const imageSrc = webcamRef.current.getScreenshot();
        setCapturedPhoto(imageSrc);
      }, 100);
    } else {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedPhoto(imageSrc);
    }
  };

  const retakePhoto = () => {
    setCapturedPhoto(null);
  };

  const toggleFlash = () => {
    setFlashEnabled((prev) => !prev);
  };

  return (
    <div style={styles.photoCapturePage}>
      {!capturedPhoto ? (
        <>
          <div style={styles.webcamContainer}>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              style={styles.webcam}
            />
          </div>
          <div style={styles.controls}>
            <button onClick={toggleFlash} style={styles.flashButton}>
              <img src={flashIcon} alt="flash" style={styles.icon} />
            </button>
            <button onClick={capturePhoto} style={styles.captureButton}>
              <img src={captureIcon} alt="capture" style={styles.bigIcon} />
            </button>
            <button onClick={capturePhoto} style={styles.transitionButton}>
              <img src={transitionIcon} alt="capture" style={styles.icon} />
            </button>
          </div>
        </>
      ) : (
        <div style={styles.photoPreviewPage}>
          <div
            style={styles.photoPreview}
            onClick={() => {
              alert("Screen transition triggered");
            }}
          >
            <img
              src={capturedPhoto}
              alt="Captured"
              style={styles.capturedPhoto}
            />
          </div>
          <div style={styles.photoPreviewControls}>
            <button onClick={retakePhoto} style={styles.retakeButton}>
              다시 찍기
            </button>
            <button style={styles.uploadButton}>올리기</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  photoCapturePage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffcccc",
    position: "relative",
  },
  webcamContainer: {
    width: "90%",
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    padding: "20px",
  },
  webcam: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "15px",
  },
  controls: {
    width: "100%",
    padding: "10px 0",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffcccc",
  },
  flashButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
  captureButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
  transitionButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
  bigIcon: {
    width: "48px",
    height: "48px",
  },
  icon: {
    width: "24px",
    height: "24px",
  },
  photoPreviewPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100vh",
    backgroundColor: "black",
    position: "relative",
  },
  photoPreview: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    overflow: "hidden",
    cursor: "pointer",
  },
  capturedPhoto: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "15px",
  },
  photoPreviewControls: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    backgroundColor: "#ffcccc",
  },
  retakeButton: {
    backgroundColor: "#ffcccc",
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  uploadButton: {
    backgroundColor: "#ffcccc",
    border: "none",
    borderRadius: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default PhotoCapturePage;
