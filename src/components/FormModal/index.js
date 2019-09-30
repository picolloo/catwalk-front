import React, { useState } from "react";

import * as S from "./styled";

export default function FormModal({ id, market, onConfirm, onCancel }) {
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

  return (
    <S.Modal>
      <S.FormContainer>
        <S.Form>
          <S.Input
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <S.Input
            placeholder="Phone"
            type="number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <S.Input
            placeholder="Street"
            value={street}
            onChange={e => setStreet(e.target.value)}
          />
          <S.Input
            placeholder="Number"
            type="number"
            value={number}
            setNumber={e => setNumber(e.target.value)}
          />
          <S.Input
            placeholder="District"
            value={district}
            onChange={e => setDistrict(e.target.value)}
          />
          <S.Input
            placeholder="ZIP"
            type="number"
            value={zip}
            onChange={e => setZip(e.target.value)}
          />
          <S.Input
            placeholder="Country"
            value={country}
            onChange={e => setCountry(e.target.value)}
          />
          <S.Input
            placeholder="City"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <S.Input
            placeholder="State"
            value={state}
            onChange={e => setState(e.target.value)}
          />

          <S.TextArea
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <div>
            <S.FileInput>
              <input
                type="file"
                accept="image/png, image/jpeg"
                style={{ display: "none" }}
              />
              Main image
            </S.FileInput>

            <S.FileInput>
              <input
                type="file"
                accept="image/png, image/jpeg"
                multiple
                style={{ display: "none" }}
              />
              Extra images
            </S.FileInput>
          </div>
          <div>
            <S.CancelButton onClick={onCancel}>Cancel</S.CancelButton>
            <S.SubmitButton
              onClick={() =>
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
                  description
                })
              }
            >
              Send
            </S.SubmitButton>
          </div>
        </S.Form>
      </S.FormContainer>
    </S.Modal>
  );
}
