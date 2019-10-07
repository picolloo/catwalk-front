import React from "react";

import * as S from "./styled";

export default function Form({
  id,
  onInputEdit,
  onPrimaryClick,
  onSecondaryClick,
  edit = false,
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
  images
}) {
  const handleImageUpload = e => {
    onInputEdit("images", [...images, e.target.files[0]]);
  };

  const handleRemoveImage = index => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);

    onInputEdit("images", updatedImages);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    images.map((img, index) => {
      formData.append(`img-${index}`, img);
    });

    onPrimaryClick({
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
      images: formData
    });
  };

  return (
    <S.Form>
      <S.InputGroup>
        <label>Name:</label>
        <S.Input
          value={name}
          name="name"
          onChange={e => onInputEdit(e.target.name, e.target.value)}
          required
          readOnly={edit}
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>Phone:</label>
        <S.Input
          type="number"
          name="phone"
          value={phone}
          onChange={e => onInputEdit(e.target.name, e.target.value)}
          required
          readOnly={edit}
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>Street:</label>
        <S.Input
          value={street}
          name="street"
          onChange={e => onInputEdit(e.target.name, e.target.value)}
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>Number:</label>
        <S.Input
          type="number"
          name="number"
          value={number}
          onChange={e => onInputEdit(e.target.name, e.target.value)}
          readOnly={edit}
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>District:</label>
        <S.Input
          value={district}
          name="district"
          onChange={e => onInputEdit(e.target.name, e.target.value)}
          readOnly={edit}
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>ZIP:</label>
        <S.Input
          type="number"
          name="zip"
          value={zip}
          onChange={e => onInputEdit(e.target.name, e.target.value)}
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>Country:</label>
        <S.Input
          value={country}
          name="country"
          onChange={e => onInputEdit(e.target.name, e.target.value)}
          readOnly={edit}
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>City:</label>
        <S.Input
          value={city}
          name="city"
          onChange={e => onInputEdit(e.target.name, e.target.value)}
          readOnly={edit}
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>State:</label>
        <S.Input
          value={state}
          name="state"
          onChange={e => onInputEdit(e.target.name, e.target.value)}
          readOnly={edit}
        />
      </S.InputGroup>
      <S.InputGroup>
        <label>Description:</label>
        <S.TextArea
          name="description"
          value={description}
          onChange={e => onInputEdit(e.target.name, e.target.value)}
          readOnly={edit}
        />
      </S.InputGroup>

      <S.InputGroup>
        <label>Images:</label>

        <S.ImagesSection>
          {images.map((img, index) => (
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
          <S.SecondaryButton onClick={onSecondaryClick}>Back</S.SecondaryButton>
          <S.PrimaryButton onClick={onPrimaryClick}>Edit</S.PrimaryButton>
        </div>
      ) : (
        <div>
          <S.SecondaryButton onClick={onSecondaryClick}>
            Cancel
          </S.SecondaryButton>
          <S.PrimaryButton onClick={handleSubmit}>Send</S.PrimaryButton>
        </div>
      )}
    </S.Form>
  );
}
