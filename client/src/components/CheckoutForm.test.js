import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);

  const header = screen.getByText(/checkout form/i);

  expect(header).toBeInTheDocument();

  //   breakTheTest(false);
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const firstNameInput = screen.getByLabelText(/first name:/i);
  const lastNameInput = screen.getByLabelText(/last name:/i);
  const addressInput = screen.getByLabelText(/address:/i);
  const cityInput = screen.getByLabelText(/city:/i);
  const stateInput = screen.getByLabelText(/state:/i);
  const zipInput = screen.getByLabelText(/zip:/i);

  fireEvent.change(firstNameInput, { target: { value: "P" } });
  fireEvent.change(lastNameInput, { target: { value: "Sherman" } });
  fireEvent.change(addressInput, { target: { value: "42 Wallaby Way" } });
  fireEvent.change(cityInput, { target: { value: "Sydney" } });
  fireEvent.change(stateInput, { target: { value: "NSW" } });
  fireEvent.change(zipInput, { target: { value: "2000" } });

  const checkoutButton = document.querySelector("button");
  within(checkoutButton).getByText(/checkout/i);
  fireEvent.click(checkoutButton);

  const successMessage = screen.getByTestId("successMessage");
  expect(successMessage).toBeInTheDocument();
});

// function breakTheTest(someValue) {
//   if (someValue === true) {
//     // do nothing!
//   } else {
//     throw new Error("form header did not render");
//   }
// }
