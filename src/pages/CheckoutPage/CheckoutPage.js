import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../styles/theme";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CheckoutPage.scss";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import { provinces } from "./Provinces";
import Cart from "../../components/Cart/Cart";
const API_URL = process.env.REACT_APP_API_URL;

const regexPhone = new RegExp(
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  "im"
);
const regexEmail = new RegExp(
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  "i"
);

function CheckoutPage({ cartItems, handleRemove, showCart, handleCartClick }) {
  let cartItemIds = cartItems.map((x) => x.id);
  console.log(JSON.stringify(cartItemIds));

  const { register, control, handleSubmit } = useForm();

  const onSubmit = (e) => {
    if (
      !e.fullName ||
      !e.phone ||
      !e.address ||
      !e.email ||
      !e.city ||
      !e.postalCode
    ) {
      alert("Please fill in the missing field(s)");
      return 0;
    } else if (!regexPhone.test(e.phone)) {
      alert("Please enter a valid phone number");
      return 0;
    } else if (!regexEmail.test(e.email)) {
      alert("Please enter a valid email address");
      return 0;
    } else {
      axios.post(`${API_URL}/checkout`, cartItems).then((response) => {
        console.log(response);
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="checkout">
        <h1 className="checkout__title">Checkout</h1>
        <div className="checkout__form-container">
          <form className="checkout__form" onSubmit={handleSubmit(onSubmit)}>
            <p className="checkout__contact">Shipping Information</p>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  id="checkout__fullName"
                  label="Full name"
                  variant="outlined"
                  sx={{ width: 1 }}
                />
              )}
              name="fullName"
              control={control}
              defaultValue=""
            />
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  id="checkout__phone"
                  label="Phone number"
                  variant="outlined"
                  sx={{ width: 1 }}
                />
              )}
              name="phone"
              control={control}
              defaultValue=""
            />
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  id="checkout__email"
                  label="Email"
                  variant="outlined"
                  sx={{ width: 1 }}
                />
              )}
              name="email"
              control={control}
              defaultValue=""
            />
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  id="checkout__address"
                  label="Address"
                  variant="outlined"
                  sx={{ width: 1 }}
                />
              )}
              name="address"
              control={control}
              defaultValue=""
            />
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  id="checkout__address2"
                  label="Apt, Suite, Unit, Building"
                  variant="outlined"
                  sx={{ width: 1 }}
                />
              )}
              name="address2"
              control={control}
              defaultValue=""
            />
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  id="checkout__city"
                  label="City"
                  variant="outlined"
                  sx={{ width: 1 }}
                />
              )}
              name="city"
              control={control}
              defaultValue=""
            />
            <Controller
              render={({ field: { onChange } }) => (
                <Autocomplete
                  disablePortal
                  id="checkout__province"
                  options={provinces}
                  sx={{ width: 1 }}
                  onChange={(e, data) => {
                    onChange(data);
                    return data;
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Province/Territory" />
                  )}
                />
              )}
              name="province"
              control={control}
              defaultValue=""
            />
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  id="checkout__postalCode"
                  label="Postal code"
                  variant="outlined"
                  sx={{ width: 1 }}
                />
              )}
              name="postalCode"
              control={control}
              defaultValue=""
            />

            <button className="checkout__form-button" type="submit">
              Confirm
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

export default CheckoutPage;
