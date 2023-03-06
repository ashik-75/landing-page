"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionTitle from "../Common";
import OfferList from "./OfferList";
import PriceBox from "./PriceBox";

function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  const toggleMenu = () => {
    setIsMonthly((prev) => !prev);
  };
  return (
    <div className="px-5 py-16 md:py-20">
      <div className="container mx-auto space-y-10">
        <SectionTitle
          title={"Simple and Affordable Pricing"}
          content="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />

        {/* toggle menu */}
        <div className="flex items-center justify-center">
          <div className="flex  items-center space-x-4">
            <div className={`${isMonthly && " text-purple-500"} font-medium`}>
              Monthly
            </div>

            {/* toggle button */}
            <div
              onClick={toggleMenu}
              className={`flex h-fit w-[70px] cursor-pointer rounded-full bg-purple-800 p-2 transition-all md:w-[100px] ${
                isMonthly ? "justify-start" : " justify-end"
              }`}
            >
              <motion.span
                layout
                transition={{
                  type: "spring",
                  stiffness: 80,
                }}
                className="h-5 w-5 rounded-full bg-white md:h-8 md:w-8"
              ></motion.span>
            </div>
            <div className={`${!isMonthly && "text-purple-500"} font-medium`}>
              Yearly
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <PriceBox
            packagename="Lite"
            duration={isMonthly ? "Mo" : "Yr"}
            price={isMonthly ? 40 : 140}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
            <OfferList content={"All Ui Component"} />
            <OfferList content={"Use with Unlimited Projects"} />
            <OfferList content={"Commercial Use"} />
            <OfferList content={"Email Suport"} />
            <OfferList content={"Lifetime access"} />
            <OfferList content={"Free Lifetime Update"} />
          </PriceBox>
          <PriceBox
            packagename="Basic"
            duration={isMonthly ? "Mo" : "Yr"}
            price={isMonthly ? 399 : 799}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
            <OfferList content={"All Ui Component"} />
            <OfferList content={"Use with Unlimited Projects"} />
            <OfferList content={"Commercial Use"} />
            <OfferList content={"Email Suport"} />
            <OfferList content={"Lifetime access"} />
            <OfferList content={"Free Lifetime Update"} />
          </PriceBox>
          <PriceBox
            packagename="Plus"
            duration={isMonthly ? "Mo" : "Yr"}
            price={isMonthly ? 599 : 999}
            subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          >
            <OfferList content={"All Ui Component"} />
            <OfferList content={"Use with Unlimited Projects"} />
            <OfferList content={"Commercial Use"} />
            <OfferList content={"Email Suport"} />
            <OfferList content={"Lifetime access"} />
            <OfferList content={"Free Lifetime Update"} />
          </PriceBox>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
