import React, { useState } from "react";

import * as S from "./styled";

export default function Form({ id, market, onConfirm, onCancel }) {
  const [name, setName] = useState(market.name);
  const [phone, setPhone] = useState(market.phone);
  const [street, setStreet] = useState(market.street);
  const [number, setNumber] = useState(market.number);
  const [district, setDistrict] = useState(market.number);
  const [zip, setZip] = useState(market.zip);
  const [country, setCountry] = useState(market.country);
  const [city, setCity] = useState(market.city);
  const [state, setState] = useState(market.state);
  const [description, setDescription] = useState(market.description);
  const [mainImage, setMainImage] = useState();
  const [extraImages, setExtraImages] = useState([]);

  const handleSubmit = () => {
    const mainFormData = new FormData();
    mainFormData.append("file", mainImage);

    const extraFormData = new FormData();

    extraImages.map((img, index) => {
      extraFormData.append(`extraImage-${index}`, img);
    });

    onConfirm({
      id,
      name,
      phone,
      street,
      number,
      district,
      zip,
      country,
      city,
      state,
      description,
      mainImage: mainFormData
      // extraImages: extraFormData
    });
  };

  return (
    <S.Form>
      <S.InputGroup>
        <label>Name:</label>
        <S.Input
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>Phone:</label>
        <S.Input
          type="number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>Street</label>
        <S.Input value={street} onChange={e => setStreet(e.target.value)} />
      </S.InputGroup>

      <S.InputGroup>
        <label>Number</label>
        <S.Input
          type="number"
          value={number}
          setNumber={e => setNumber(e.target.value)}
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>District</label>
        <S.Input value={district} onChange={e => setDistrict(e.target.value)} />
      </S.InputGroup>

      <S.InputGroup>
        <label>ZIP</label>
        <S.Input
          type="number"
          value={zip}
          onChange={e => setZip(e.target.value)}
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>Country</label>
        <S.Input value={country} onChange={e => setCountry(e.target.value)} />
      </S.InputGroup>

      <S.InputGroup>
        <label>City</label>
        <S.Input value={city} onChange={e => setCity(e.target.value)} />
      </S.InputGroup>

      <S.InputGroup>
        <label>State</label>
        <S.Input value={state} onChange={e => setState(e.target.value)} />
      </S.InputGroup>
      <S.InputGroup>
        <label>Description</label>
        <S.TextArea
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </S.InputGroup>
      <div>
        <S.FileInput>
          Main image
          <input
            type="file"
            name="mainImage"
            accept="image/png, image/jpeg"
            style={{ display: "none" }}
            onChange={e => setMainImage(e.target.files[0])}
          />
        </S.FileInput>

        <S.FileInput>
          Extra images
          <input
            type="file"
            name="extraImages"
            accept="image/png, image/jpeg"
            multiple
            style={{ display: "none" }}
            onChange={e => setExtraImages(e.target.files)}
          />
        </S.FileInput>
      </div>

      <div>
        <S.CancelButton onClick={onCancel}>Cancel</S.CancelButton>
        <S.SubmitButton onClick={handleSubmit}>Send</S.SubmitButton>
      </div>
    </S.Form>
  );
}
