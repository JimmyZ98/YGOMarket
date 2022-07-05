import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../styles/theme";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SellPage.scss";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { createFilterOptions } from "@mui/material/Autocomplete";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import Cart from "../../components/Cart/Cart";

const YGO_API_URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
const API_URL = process.env.REACT_APP_API_URL;

//image position
const aspectRatio = [1.4, 1];
const StyledDiv = styled.div`
  height: calc(20.5rem / ${aspectRatio[1]});
  width: calc(20rem / ${aspectRatio[0]});
  border: thick double #f72585;
  margin-bottom: 2rem;
`;

function SellPage({ cartItems, handleRemove, showCart, handleCartClick }) {
  const [cardData, setCardData] = useState([]);
  const [cardCode, setCardCode] = useState([]);
  const [marketPrice, setMarketPrice] = useState("");
  const [cardRarity, setCardRarity] = useState([]);
  const [image, setImage] = useState([]);
  const [displayImage, setDisplayImage] = useState([]);

  useEffect(() => {
    axios.get(YGO_API_URL).then((response) => {
      setCardData(response.data.data);
    });
  }, []);

  const optionsLimit = 10;
  const defauiltFilterOptions = createFilterOptions();
  const filterOptions = (options, state) => {
    return defauiltFilterOptions(options, state).slice(0, optionsLimit);
  };

  const suggestPrice = [
    { label: "Suggested: Market Price", value: marketPrice },
    {
      label: "Suggested: 90% Market Price",
      value: Math.round(marketPrice * 0.9 * 100) / 100,
    },
    {
      label: "Suggested: 85% Market Price",
      value: Math.round(marketPrice * 0.85 * 100) / 100,
    },
    {
      label: "Suggested: 80% Market Price",
      value: Math.round(marketPrice * 0.8 * 100) / 100,
    },
    {
      label: "Suggested: 75% Market Price",
      value: Math.round(marketPrice * 0.75 * 100) / 100,
    },
  ];

  // `${API_URL}sell`, e, {
  //   headers: { "Content-Type": "application/json" },
  // }

  //form controls
  const { control, handleSubmit } = useForm();

  const onSubmit = (e) => {
    e.rarity = cardRarity;
    e.image = image;
    e.marketPrice = marketPrice;
    e.sellerId = 1;
    console.log(e);
    axios.post(`${API_URL}/sell`, e).then((response) => {
      if (response) {
        alert("Your card has been listed!");
        window.location.assign(`/home`);
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="sell">
        <h1 className="sell__title">Sell Card</h1>
        <div className="sell__form-container">
          <StyledDiv>
            <img
              src={displayImage}
              alt="card"
              className="sell__display-image"
            />
          </StyledDiv>

          <form className="sell__form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              render={({ field: { onChange } }) => (
                <Autocomplete
                  isOptionEqualToValue={(option, value) =>
                    option.id === value.id
                  }
                  filterOptions={filterOptions}
                  disablePortal
                  id="sell__card-data"
                  className="sell__form-input"
                  options={cardData}
                  getOptionLabel={(cardData) => cardData.name}
                  sx={{ width: 1 }}
                  onChange={(e, data) => {
                    onChange(data.name);
                    setCardCode(data.card_sets);
                    setImage(data.card_images[0].image_url_small);
                    setDisplayImage(data.card_images[0].image_url);
                    return data.name;
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Search a Card" />
                  )}
                />
              )}
              name="cardName"
              control={control}
              defaultValue="n/a"
              rules={{ required: true }}
            />
            <Controller
              render={({ field: { onChange } }) => (
                <Autocomplete
                  isOptionEqualToValue={(option, value) =>
                    option.id === value.id
                  }
                  disablePortal
                  id="sell__set-code"
                  className="sell__form-input"
                  options={cardCode}
                  getOptionLabel={(cardCode) =>
                    cardCode.set_name +
                    " " +
                    cardCode.set_code +
                    " " +
                    cardCode.set_rarity_code
                  }
                  sx={{ width: 1 }}
                  onChange={(e, data) => {
                    onChange(data.set_code);
                    setCardRarity(data.set_rarity);
                    setMarketPrice(data.set_price);
                    return data.set_code;
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Select Set" />
                  )}
                />
              )}
              name="cardCode"
              control={control}
              defaultValue="n/a"
              rules={{ required: true }}
            />
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  id="sell__description"
                  label="Description"
                  variant="outlined"
                  sx={{ width: 1 }}
                />
              )}
              name="description"
              control={control}
              rules={{ required: true }}
              defaultValue=""
            />
            <Controller
              render={({ field: { onChange } }) => (
                <Autocomplete
                  isOptionEqualToValue={(option, value) =>
                    option.id === value.id
                  }
                  freeSolo
                  disablePortal
                  id="sell__price"
                  className="sell__form-input"
                  options={suggestPrice}
                  getOptionLabel={(suggesPrice) => suggesPrice.label}
                  sx={{ width: 1, marginBottom: -1.75 }}
                  onChange={(e, data) => {
                    onChange(data.value);
                    return data.value;
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Enter Custom Price or Choose Suggested Prices"
                    />
                  )}
                />
              )}
              name="price"
              control={control}
              defaultValue=""
              rules={{ required: true }}
            />
            <p>*Market price is {marketPrice}</p>

            <button className="sell__form-button" type="submit">
              Submit
            </button>
          </form>
        </div>
        <Cart
          cartItems={cartItems}
          handleRemove={handleRemove}
          showCart={showCart}
          handleCartClick={handleCartClick}
        />
      </div>
    </ThemeProvider>
  );
}

export default SellPage;
