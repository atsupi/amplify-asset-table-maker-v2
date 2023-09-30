import { useEffect, useState } from "react";
import { UploaderDataParams, createCode } from "../util";
import Quagga from "quagga";
import JsBarcode from "jsbarcode";
import "./ReaderPage.css";

export const ReaderPage = (params: any) => {
  const [username, setUsername] = useState("");
  const [resultText, setResultText] = useState("####");
  useEffect(() => {
    setUsername(params.username);
  }, []);

  const startReading = () => {
    const quaggaCanvas = document.getElementById("quaggaCanvas");
    console.log("startReading: Started", Quagga);
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: quaggaCanvas,
        },
        decoder: {
          readers: ["code_128_reader"],
        },
      },
      (err: any) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Initialized.");
        Quagga.start();
      }
    );

    Quagga.onProcessed((result: any) => {
      if (
        result == null ||
        typeof result != "object" ||
        result.boxes == undefined
      )
        return;
      const ctx = Quagga.canvas.ctx.overlay;
      const canvas = Quagga.canvas.dom.overlay;
      ctx.clearRect(0, 0, parseInt(canvas.width), parseInt(canvas.height));
      Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, ctx, {
        color: "blue",
        lineWidth: 5,
      });
    });

    Quagga.onDetected((result: any) => {
      console.log(result.codeResult.code);
      setResultText(result.codeResult.code);
      JsBarcode("#js-barcode", result.codeResult.code, { format: "CODE128" });
    });
  };

  const stopReading = () => {
    console.log("stopReading: Stopped");
    Quagga.stop();
  };

  const UploadCode = () => {
    const date = new Date().getTime().toString().slice(0, 12);
    const param: UploaderDataParams = {
      id: date,
      reportBy: username,
      code: resultText,
    };
    createCode(param);
  };

  return (
    <div className="readerPageContainer">
      <p>Reader Page</p>
      <div id="readerPageInner">
        <div id="readerPageCommands">
          <button id="readerStart" onClick={startReading}>
            Start
          </button>
          <button id="readerStop" onClick={stopReading}>
            Stop
          </button>
        </div>
        <div id="quaggaCanvas"></div>
        <div id="readerResultText">
          <p>{resultText}</p>
        </div>
        <div id="barcode">
          <svg id="js-barcode"></svg>
        </div>
        <button onClick={UploadCode}>Upload the code</button>
      </div>
    </div>
  );
};
