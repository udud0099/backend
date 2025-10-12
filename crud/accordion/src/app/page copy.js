"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const getTopic = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/mydata", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Faild to fetch data");

    return res.json();
  } catch (error) {
    console.log("error is :", error);
  }
};

export default async function Home() {
  const { accordions } = await getTopic();
  console.log(accordions, "ok");
  const [openItem, setOpenItem] = useState(null);

  return (
    <>
      <div>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          // defaultValue="item-1"
          value={openItem ?? undefined}
          onValueChange={(val) => setOpenItem(val)}
        >
          {accordions.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{openItem === `item-${index}` ? item.add : item.name}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
