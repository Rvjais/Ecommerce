import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const OrdersDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "UPI",
      shipppingMethod: "Standerd",
      shippingAddress: { city: "Prayagraj", state: "Uttar Pradesh" },
      orderItems: [
        {
          productId: "1",
          name: "Jacket",
          price: 120,
          quantity: 1,
          image: "https://picsum.photos/150?random=1",
        },
        {
          productId: "2",
          name: "Jacket",
          price: 120,
          quantity: 1,
          image: "https://picsum.photos/150?random=2",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Order Details
        {!orderDetails ? (
          <p>No Order Detailes Found</p>
        ) : (
          <div className="p-4  sm:p-6 rounded-lg border">
            <div className="flex flex-col sm:flex-row justify-between mb-8 ">
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Order ID: #{orderDetails._id}
                </h3>
                <p className="text-gray-600">
                  {new Date(orderDetails.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
                <span
                  className={`${
                    !orderDetails.isPaid
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  } px-3 py-1 rounded-full text-sm font-medium mb-2`}
                >
                  {!orderDetails.isPaid ? "Approved " : "Pending"}
                </span>
                <span
                  className={`${
                    orderDetails.isDelivered
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  } px-3 py-1 rounded-full text-sm font-medium mb-2`}
                >
                  {orderDetails.isDelivered ? "Delivered " : "Pending Delivery"}
                </span>
              </div>
            </div>
            {/* Customer , Payment ,Shipping Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
                <p>Payment Method: {orderDetails.paymentMethod} </p>
                <p>Status: {orderDetails.isPaid ? "Paid" : "Unpaid"} </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
                <p>Shipping Method: {orderDetails.shipppingMethod} </p>
                <p>Address: {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.state}`} </p>
              </div>
            </div>
            {/* Product List */}
            <div className="overflow-x-auto ">
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <table className="min-w-full text-gray-600 mb-4">
                <thead className="bg-gray-100 ">
                  <tr className="py-2 px-4 ">Name</tr>
                  <tr className="py-2 px-4 ">Unit Price</tr>
                  <tr className="py-2 px-4 ">Quantity</tr>
                  <tr className="py-2 px-4 ">Total</tr>
                </thead>
              </table>
            </div>
          </div>
        )}
      </h2>
    </div>
  );
};

export default OrdersDetailsPage;
