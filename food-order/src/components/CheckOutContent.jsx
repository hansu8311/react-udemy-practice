import InputCustom from "./InputCustom";
import { MealsContext } from "../store/food-context";
import { use } from "react";
import { useFormState } from "react-dom";
import { isNotEmpty, isEmail } from "../util/validation";
import SubmitButton from "./SubmitButton";

function CheckOutContent({ onCancel, onOpen }) {
  const { orderTotAmt, updateOrder, orders } = use(MealsContext);
  const [formState, formFunction, pending] = useFormState(handleCheckOut, {
    name: "",
    street: "",
    email: "",
    postalCode: "",
    city: "",
  });
  console.log(formState);
  async function handleCheckOut(preState, formData) {
    const name = formData.get("name");
    const street = formData.get("street");
    const email = formData.get("email");
    const postalCode = formData.get("postal-code");
    const city = formData.get("city");

    const customer = {
      name,
      street,
      email,
      "postal-code": postalCode,
      city,
    };

    if (!isNotEmpty(email) || !isEmail(email)) {
      return {
        ...customer,
        error: {
          key: "email",
          errorMsg: "email checked",
        },
      };
    }

    if (!isNotEmpty(name)) {
      return {
        ...customer,
        error: {
          key: "name",
          errorMsg: "name checked",
        },
      };
    }

    if (!isNotEmpty(street)) {
      return {
        ...customer,
        error: {
          key: "name",
          errorMsg: "street checked",
        },
      };
    }

    if (!isNotEmpty(postalCode)) {
      return {
        ...customer,
        error: {
          key: "postal-code",
          errorMsg: "postal-code checked",
        },
      };
    }

    if (!isNotEmpty(city)) {
      return {
        customer,
        error: {
          key: "city",
          errorMsg: "city checked",
        },
      };
    }
    try {
      const data = await updateOrder({ customer, items: orders });
      onOpen();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="control">
      <form action={formFunction}>
        <h2>Check Out</h2>
        <div>Total Amout ${orderTotAmt}</div>
        <InputCustom
          type="text"
          name="name"
          label="Full Name"
          defaultValue={formState?.name}
          error={
            formState?.error?.key === "name" ? formState?.error.errorMsg : ""
          }
        />
        <InputCustom
          type="text"
          name="email"
          label="Email Address"
          defaultValue={formState?.email}
          error={
            formState?.error?.key === "email" ? formState?.error.errorMsg : ""
          }
        />
        <InputCustom
          type="text"
          name="street"
          label="Street"
          defaultValue={formState?.street}
          error={
            formState?.error?.key === "street" ? formState?.error.errorMsg : ""
          }
        />
        <div className="control-row">
          <InputCustom
            type="number"
            name="postal-code"
            label="Postal Code"
            defaultValue={formState?.["postal-code"]}
            error={
              formState?.error?.key === "postal-code"
                ? formState?.error.errorMsg
                : ""
            }
          />
          <InputCustom
            type="text"
            name="city"
            label="City"
            defaultValue={formState?.city}
            error={
              formState?.error?.key === "city" ? formState?.error.errorMsg : ""
            }
          />
        </div>
        <div className="modal-actions">
          <button className="text-button" onClick={onCancel}>
            Close
          </button>
          <SubmitButton>Submit Order</SubmitButton>
        </div>
      </form>
    </div>
  );
}

export default CheckOutContent;
