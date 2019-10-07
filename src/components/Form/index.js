import React, { useState, useMemo } from "react";

import * as S from "./styled";

export default function Form({
  id,
  market,
  onConfirm,
  onCancel,
  edit = false,
  onEdit
}) {
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
  const [images, setImages] = useState([]);

  const thumbnails = useMemo(
    () => images.map(img => URL.createObjectURL(img)),
    [images]
  );

  const handleImageUpload = e => {
    setImages([...images, e.target.files[0]]);
  };

  const handleRemoveImage = index => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);

    setImages(updatedImages);
  };

  const handleSubmit = () => {
    const mainFormData = new FormData();
    mainFormData.append(`image`, images[0]);

    const extraFormData = new FormData();
    images.slice(1).map((img, index) => {
      extraFormData.append(`img-${index}`, img);
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
      mainImage: mainFormData,
      extraImages: extraFormData
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
          readOnly={edit}
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>Phone:</label>
        <S.Input
          type="number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
          readOnly={edit}
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>Street:</label>
        <S.Input value={street} onChange={e => setStreet(e.target.value)} />
      </S.InputGroup>

      <S.InputGroup>
        <label>Number:</label>
        <S.Input
          type="number"
          value={number}
          setNumber={e => setNumber(e.target.value)}
          readOnly={edit}
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>District:</label>
        <S.Input
          value={district}
          onChange={e => setDistrict(e.target.value)}
          readOnly={edit}
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>ZIP:</label>
        <S.Input
          type="number"
          value={zip}
          onChange={e => setZip(e.target.value)}
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>Country:</label>
        <S.Input
          value={country}
          onChange={e => setCountry(e.target.value)}
          readOnly={edit}
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>City:</label>
        <S.Input
          value={city}
          onChange={e => setCity(e.target.value)}
          readOnly={edit}
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>State:</label>
        <S.Input
          value={state}
          onChange={e => setState(e.target.value)}
          readOnly={edit}
        />
      </S.InputGroup>
      <S.InputGroup>
        <label>Description:</label>
        <S.TextArea
          value={description}
          onChange={e => setDescription(e.target.value)}
          readOnly={edit}
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>Images:</label>

        <S.ImagesSection>
          {thumbnails.map((img, index) => (
            <S.Image
              key={index}
              style={{ backgroundImage: `url(${img})` }}
              onClick={() => handleRemoveImage(index)}
            >
              <span>Remove</span>
            </S.Image>
          ))}

          {!edit && images.length < 3 && (
            <S.FileInput>
              Add
              <input
                type="file"
                name="mainImage"
                accept="image/png, image/jpeg"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
            </S.FileInput>
          )}
        </S.ImagesSection>
      </S.InputGroup>

      {edit ? (
        <div>
          <S.SecondaryButton onClick={onCancel}>Back</S.SecondaryButton>
          <S.PrimaryButton onClick={onEdit}>Edit</S.PrimaryButton>
        </div>
      ) : (
        <div>
          <S.SecondaryButton onClick={onCancel}>Cancel</S.SecondaryButton>
          <S.PrimaryButton onClick={handleSubmit}>Send</S.PrimaryButton>
        </div>
      )}
    </S.Form>
  );
}
