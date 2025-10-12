"use client";

import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const [accordions, setAccordions] = useState([]);
  const [openItem, setOpenItem] = useState(null);

  useEffect(() => {
    const getTopic = async () => {
      try {
        const res = await fetch("/api/mydata", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setAccordions(data.accordions || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getTopic();
  }, []);

  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        value={openItem ?? undefined}
        onValueChange={(val) => setOpenItem(val)}
      >
        {accordions.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>
              {openItem === `item-${index}` ? item.add : item.name}
            </AccordionTrigger>
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
  );
}
