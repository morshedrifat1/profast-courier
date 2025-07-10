import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "../../components/Loader";
import Swal from "sweetalert2";

const SendParcel = () => {
  const [regions, setRegions] = useState([]);
  const [wireHouse, setWirehouse] = useState([]);
  const [receivWireHouse, setReceivWireHouse] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  useEffect(() => {
    axios.get("division.json").then((res) => {
      setRegions(res.data);
    });
  }, []);
  const senderRegion = watch("senderRegion");
  const receiverRegion = watch("receiverRegion");
  //   set warehous list if region select
  useEffect(() => {
    if (senderRegion) {
      axios.get("warehouses.json").then((res) => {
        const warehouses = res.data.filter(
          (house) => house.region.toLowerCase() === senderRegion
        );
        const allCoveredAreas = warehouses.flatMap(
          (house) => house.district || []
        );
        setWirehouse(allCoveredAreas);
      });
    }
    setWirehouse([]);
  }, [senderRegion]);
  //   set warehous list if receiver region select
  useEffect(() => {
    if (receiverRegion) {
      axios.get("warehouses.json").then((res) => {
        const warehouses = res.data.filter(
          (house) => house.region.toLowerCase() === receiverRegion
        );
        const allCoveredAreas = warehouses.flatMap(
          (house) => house.district || []
        );
        setReceivWireHouse(allCoveredAreas);
      });
    }
    setReceivWireHouse([]);
  }, [receiverRegion]);

const onSubmit = (data) => {
  const parcelType = data.parcelType;
  const weight = parseFloat(data.parcelWeight);
  const senderCity = data.SenderPickup;
  const receiverCity = data.receiverWireHouse;

  let baseCharge = 0;
  let extraCharge = 0;

  // Calculate base charge
  if (parcelType === "document") {
    baseCharge = senderCity === receiverCity ? 60 : 80;
  } else if (parcelType === "notDocument") {
    baseCharge = senderCity === receiverCity ? 110 : 150;

    if (weight > 3) {
      // Extra for overweight
      extraCharge = senderCity === receiverCity
        ? (weight - 3) * 40
        : 40 + (weight - 3) * 40;
    }
  }
  const totalCharge = baseCharge + extraCharge;
  // Show SweetAlert
  Swal.fire({
    title: "Delivery Cost Breakdown",
    html: `
      <div style="text-align: left; font-size: 16px; line-height: 1.6;">
        <strong>Parcel Type:</strong> ${parcelType === "document" ? "Document" : "Non-Document"} <br/>
        <strong>From:</strong> ${senderCity} <br/>
        <strong>To:</strong> ${receiverCity} <br/>
        <strong>Weight:</strong> ${weight} kg <br/>
        <strong>Base Charge:</strong> ${baseCharge} ৳ <br/>
        ${extraCharge > 0 ? `<strong>Extra Charge:</strong> ${extraCharge} ৳ <br/>` : ""}
        <hr style="margin: 10px 0;" />
        <strong style="color: #000000; font-size: 20px;">Total :</strong> <span style="color: green;font-weight: bold; font-size: 18px;">${totalCharge} ৳</span>
      </div>
    `,
    icon: "info",
    showDenyButton: true,
    showConfirmButton: true,
    confirmButtonText: "Continue to Payment",
    denyButtonText: "Edit Order",
    confirmButtonColor: "#22c55e", // green
    denyButtonColor: "#6366f1", // blue
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Order Confirmed!",
        text: "Your parcel order has been successfully placed.",
        icon: "success",
      });

    } else if (result.isDenied) {
      Swal.fire({
        title: "Edit Mode",
        text: "You can now change your order details.",
        icon: "info",
      });
    }
  });
};



  return (
    <div className="px-5 mb-20">
      <div className="max-w-375 mx-auto px-7 py-14 lg:px-20 lg:py-20 bg-white rounded-4xl">
        <h1 className="text-4xl text-Heading font-extrabold">Add Parcel</h1>
        {/* Separator Line */}
        <div className="border-t-1 border border-gray-300/30 mt-12"></div>

        {/* main form */}
        <div>
          <h1 className="text-xl sm:text-3xl font-extrabold text-Heading mt-7">
            Enter your parcel details
          </h1>
          <div className="mt-7">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* document type */}
              <div>
                <div className="flex flex-wrap gap-8">
                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      value="document"
                      className="w-5 h-5"
                      {...register("parcelType", { required: true })}
                    />
                    <span className="text-base font-semibold text-Heading">
                      Document
                    </span>
                  </label>
                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      {...register("parcelType", { required: true })}
                      value="notDocument"
                      className="w-5 h-5"
                    />

                    <span className="text-base font-semibold text-Heading">
                      Not-Document
                    </span>
                  </label>
                </div>
                {errors.parcelType?.type === "required" && (
                  <p className="text-red-700 mt-1.5">Select Parcel Type *</p>
                )}
              </div>
              {/* parcel info */}
              <div className="grid grid-col-1 sm:grid-cols-2 gap-7 mt-7">
                <div>
                  <label className="text-inputText text-base font-medium">
                    Parcel Name
                  </label>
                  <input
                    type="text"
                    placeholder="Parcel Name"
                    {...register("parcelName", { required: true })}
                    className="pl-3 border-1 border-border w-full p-2 rounded-lg text-base text-inputText font-medium focus:outline-2 focus:outline-offset-2 focus:outline-borderOutline placeholder:text-border mt-1.5"
                  />
                  {errors.parcelName?.type === "required" && (
                    <p className="text-red-700 mt-1.5">Enter Parcel Name *</p>
                  )}
                </div>
                <div>
                  <label className="text-inputText text-base font-medium">
                    Parcel Weight (KG)
                  </label>
                  <input
                    type="number"
                    {...register("parcelWeight", { required: true })}
                    placeholder="Parcel Weight (KG)"
                    className="pl-3 border-1 border-border w-full p-2 rounded-lg text-base text-inputText font-medium focus:outline-2 focus:outline-offset-2 focus:outline-borderOutline placeholder:text-border mt-1.5"
                  />
                  {errors.parcelWeight?.type === "required" && (
                    <p className="text-red-700 mt-1.5">
                      Enter Parcel Parcel Weight *
                    </p>
                  )}
                </div>
              </div>
              {/* Separator Line */}
              <div className="border-t-1 border border-gray-300/30 mt-7"></div>

              {/* sender and reciver Details */}
              <div className="grid grid-col-1 gap-8  xl:grid-cols-2 xl:gap-12">
                {/* sender Details */}
                <div>
                  <h1 className="text-lg font-extrabold text-Heading mt-7">
                    Sender Details
                  </h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-5">
                    <div>
                      <label className="text-inputText text-base font-medium">
                        Sender Name
                      </label>
                      <input
                        type="text"
                        placeholder="Sender Name"
                        {...register("senderName", { required: true })}
                        className="pl-3 border-1 border-border w-full p-2 rounded-lg text-base text-inputText font-medium focus:outline-2 focus:outline-offset-2 focus:outline-borderOutline placeholder:text-border mt-1.5"
                      />
                      {errors.senderName?.type === "required" && (
                        <p className="text-red-700 mt-1.5">
                          Enter Sender Name *
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-inputText text-base font-medium">
                        Sender Region
                      </label>
                      <select
                        {...register("senderRegion", { required: true })}
                        className="pl-3 border-1 border-border w-full p-2 rounded-lg text-base text-inputText font-medium focus:outline-2 focus:outline-offset-2 focus:outline-borderOutline placeholder:text-border mt-1.5"
                      >
                        <option value="">Select sender region</option>
                        {regions.map((region, index) => (
                          <option key={index} value={region.toLowerCase()}>
                            {region}
                          </option>
                        ))}
                      </select>
                      {errors.senderRegion?.type === "required" && (
                        <p className="text-red-700 mt-1.5">
                          Select Sender Region *
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-inputText text-base font-medium">
                        Sender Pickup Wire house
                      </label>
                      <select
                        {...register("SenderPickup", { required: true })}
                        id=""
                        className="pl-3 border-1 border-border w-full p-2 rounded-lg text-base text-inputText font-medium focus:outline-2 focus:outline-offset-2 focus:outline-borderOutline placeholder:text-border mt-1.5"
                      >
                        <option value="">Select Wire house</option>
                        {wireHouse?.map((house, index) => (
                          <option key={index} value={house.toLowerCase()}>
                            {house}
                          </option>
                        ))}
                      </select>
                      {errors.SenderPickup?.type === "required" && (
                        <p className="text-red-700 mt-1.5">
                          Select Wire house *
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-inputText text-base font-medium">
                        Sender Address
                      </label>
                      <input
                        type="text"
                        placeholder="Sender Address"
                        {...register("senderAddress", { required: true })}
                        className="pl-3 border-1 border-border w-full p-2 rounded-lg text-base text-inputText font-medium focus:outline-2 focus:outline-offset-2 focus:outline-borderOutline placeholder:text-border mt-1.5"
                      />
                      {errors.senderAddress?.type === "required" && (
                        <p className="text-red-700 mt-1.5">
                          Enter Sender Address *
                        </p>
                      )}
                    </div>
                    <div className="col-span-full">
                      <label className="text-inputText text-base font-medium">
                        Sender Contact No
                      </label>
                      <input
                        type="number"
                        placeholder="Sender Contact No"
                        {...register("senderContactNo", { required: true })}
                        className="pl-3 border-1 border-border w-full p-2 rounded-lg text-base text-inputText font-medium focus:outline-2 focus:outline-offset-2 focus:outline-borderOutline placeholder:text-border mt-1.5"
                      />
                      {errors.senderContactNo?.type === "required" && (
                        <p className="text-red-700 mt-1.5">
                          Enter Sender Contact No *
                        </p>
                      )}
                    </div>
                    <div className="col-span-full">
                      <label className="text-inputText text-base font-medium">
                        Pickup Instruction
                      </label>
                      <textarea
                        type="text"
                        placeholder="Pickup Instruction"
                        {...register("pickupInstruction", { required: true })}
                        className="pl-3 border-1 border-border w-full p-2 rounded-lg text-base text-inputText font-medium focus:outline-2 focus:outline-offset-2 focus:outline-borderOutline placeholder:text-border mt-1.5 h-30"
                      />
                      {errors.pickupInstruction?.type === "required" && (
                        <p className="text-red-700 mt-1.5">
                          Enter Sender Pickup Instruction *
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {/* reciver Details */}
                <div>
                  <h1 className="text-lg font-extrabold text-Heading mt-7">
                    Receiver Details
                  </h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-5">
                    <div>
                      <label className="text-inputText text-base font-medium">
                        Receiver Name
                      </label>
                      <input
                        type="text"
                        placeholder="Receiver Name"
                        {...register("receiverName", { required: true })}
                        className="pl-3 border-1 border-border w-full p-2 rounded-lg text-base text-inputText font-medium focus:outline-2 focus:outline-offset-2 focus:outline-borderOutline placeholder:text-border mt-1.5"
                      />
                      {errors.receiverName?.type === "required" && (
                        <p className="text-red-700 mt-1.5">
                          Enter Receiver Name *
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-inputText text-base font-medium">
                        Receiver Region
                      </label>
                      <select
                        {...register("receiverRegion", { required: true })}
                        className="pl-3 border-1 border-border w-full p-2 rounded-lg text-base text-inputText font-medium focus:outline-2 focus:outline-offset-2 focus:outline-borderOutline placeholder:text-border mt-1.5"
                      >
                        <option value="">Select Receiver region</option>
                        {regions.map((region, index) => (
                          <option key={index} value={region.toLowerCase()}>
                            {region}
                          </option>
                        ))}
                      </select>
                      {errors.receiverRegion?.type === "required" && (
                        <p className="text-red-700 mt-1.5">
                          Select Receiver region *
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-inputText text-base font-medium">
                        Receiver Delivery Wire house
                      </label>
                      <select
                        {...register("receiverWireHouse", { required: true })}
                        id=""
                        className="pl-3 border-1 border-border w-full p-2 rounded-lg text-base text-inputText font-medium focus:outline-2 focus:outline-offset-2 focus:outline-borderOutline placeholder:text-border mt-1.5"
                      >
                        <option value="">Select Wire house</option>
                        {receivWireHouse?.map((house, index) => (
                          <option key={index} value={house.toLowerCase()}>
                            {house}
                          </option>
                        ))}
                      </select>
                      {errors.receiverWireHouse?.type === "required" && (
                        <p className="text-red-700 mt-1.5">
                          Select Receiver Wire house *
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-inputText text-base font-medium">
                        Receiver Address
                      </label>
                      <input
                        type="text"
                        placeholder="Receiver Address"
                        {...register("receiverAddress", { required: true })}
                        className="pl-3 border-1 border-border w-full p-2 rounded-lg text-base text-inputText font-medium focus:outline-2 focus:outline-offset-2 focus:outline-borderOutline placeholder:text-border mt-1.5"
                      />
                      {errors.receiverAddress?.type === "required" && (
                        <p className="text-red-700 mt-1.5">
                          Enter Receiver Address *
                        </p>
                      )}
                    </div>
                    <div className="col-span-full">
                      <label className="text-inputText text-base font-medium">
                        Receiver Contact No
                      </label>
                      <input
                        type="number"
                        placeholder="Receiver Contact No"
                        {...register("receiverContactNo", { required: true })}
                        className="pl-3 border-1 border-border w-full p-2 rounded-lg text-base text-inputText font-medium focus:outline-2 focus:outline-offset-2 focus:outline-borderOutline placeholder:text-border mt-1.5"
                      />
                      {errors.receiverContactNo?.type === "required" && (
                        <p className="text-red-700 mt-1.5">
                          Enter Receiver Contact No *
                        </p>
                      )}
                    </div>
                    <div className="col-span-full">
                      <label className="text-inputText text-base font-medium">
                        Delivery Instruction
                      </label>
                      <textarea
                        type="text"
                        placeholder="Delivery Instruction"
                        {...register("deliveryInstruction", { required: true })}
                        className="pl-3 border-1 border-border w-full p-2 rounded-lg text-base text-inputText font-medium focus:outline-2 focus:outline-offset-2 focus:outline-borderOutline placeholder:text-border mt-1.5 h-30"
                      />
                      {errors.deliveryInstruction?.type === "required" && (
                        <p className="text-red-700 mt-1.5">
                          Enter Receiver Delivery Instruction *
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* submit */}
              <div>
                <p className="mt-12 text-black text-base font-medium">
                  * PickUp Time 4pm-7pm Approx.
                </p>
                <input
                  type="submit"
                  className="bg-primary text-black text-base font-semibold mt-10 w-full sm:w-80 py-2 rounded-lg cursor-pointer"
                  value="Proceed to Confirm Booking"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendParcel;
