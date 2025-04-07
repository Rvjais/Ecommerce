import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const cart = {
  product: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      Image: "https://picsum.photos/150?randome=2",
    },
    {
      name: "Stylish Jacket",
      size: "42",
      color: "White",
      price: 75,
      Image: "https://picsum.photos/150?randome=1",
    },
  ],
  totalPrice: 195,
};
const Checkout = () => {
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter ">
      {/* Left Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form>
          <h3 className="text-lg mb-4">
            Contact Details
            <div className="mb-4 ">
              <label htmlFor="" className="block text-gray-700">
                {" "}
                Email{" "}
              </label>
              <input
                type="email"
                value="ranveerjais9984@gmail.com"
                className="w-full p-2 border rounded"
                disabled
              />
            </div>
            <h3 className="text-lg mb-4 "> Delivery</h3>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div className="">
                <label htmlFor="" className="block text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded "
                  value={shippingAddress.firstName}
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      firstName: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="">
                <label htmlFor="" className="block text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded "
                  value={shippingAddress.lastName}
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                     lastName: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
