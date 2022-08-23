import { useState, useRef } from "react";
import SignaturePad from "react-signature-canvas";
import { HiDocumentText } from "react-icons/hi";
import Axios from "axios";
const Form = ({ showPdf, setShowPdf }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [firma, setFirma] = useState("");

  const [dataEnviar, setDataEnviar] = useState({});

  const [error, setError] = useState(false);

  const signaturePad = useRef({});
  const handleReset = (e) => {
    e.preventDefault();
    signaturePad.current.clear();
  };
  const handleSave = (e) => {
    e.preventDefault();
    const dataURL = signaturePad.current.toDataURL("image/png");
    setFirma(dataURL);
    if ([name, address, city, state, zip, phone, firma].includes("")) {
      setError(true);
      return;
    }
    setDataEnviar({
      name,
      address,
      city,
      state,
      zip,
      phone,
      firma,
    });
    Axios.post(url, {
      name: dataEnviar.name,
      address: dataEnviar.address,
      city: dataEnviar.city,
      state: dataEnviar.state,
      zip: dataEnviar.zip,
      phone: paseInt(dataEnviar.phone),
      firma: dataEnviar.firma,
    });
    setError(false);
  };
  const handleClean = (e) => {
    e.preventDefault();
    setError(false);
    setName("");
    setAddress("");
    setCity("");
    setState("");
    setZip("");
    setPhone("");
    signaturePad.current.clear();
  };
  return (
    <div className="form-container">
      <div className="cont-form">
        <div className="form__title">
          <h3>Request NDA</h3>
          <div>
            <button className="show" onClick={() => setShowPdf(!showPdf)}>
              Show
              <HiDocumentText />
            </button>
          </div>
        </div>
        <form className="form">
          <p>Fill your data to generate the contract</p>
          {error ? <p>Tiene que llenar todos los campos</p> : null}
          <div className="campos">
            <div className="col-form">
              <div className="campo">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
            <div className="col-form">
              <div>
                <label htmlFor="state">State:</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="zip">Zip:</label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="signature-container">
            <SignaturePad
              ref={signaturePad}
              canvasProps={{
                className: "signature-pad",
              }}
            />
          </div>
          <div className="buttons">
            <button className="reset" onClick={handleReset}>
              Reset
            </button>
            <input type="submit" className="save" onClick={handleSave} />
            <button className="reset" onClick={handleClean}>
              Limpiar
            </button>
          </div>
          <hr />
          <div className="continue">
            <button type="text">Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
