"use client";

import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen container pt-16 text-primary">
      <p className="h2 text-center">Frequently asked questions</p>
      <div className="w-full text-primary pt-10">
        <Accordion allowZeroExpanded={true} className="flex flex-col gap-4">
          <AccordionItem className="border-b-[1px] border-[#99999E]">
            <AccordionItemHeading>
              <AccordionItemButton className="flex items-center justify-between gap-1 w-full bg-[#fff] py-4 px-2">
                What can Slack apps do?
                <AiOutlineDown />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="p-2">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </AccordionItemPanel>
          </AccordionItem>
          {/*  */}
          <AccordionItem className="border-b-[1px] border-[#99999E]">
            <AccordionItemHeading>
              <AccordionItemButton className="flex items-center justify-between gap-1 w-full bg-[#fff] py-4 px-2">
                How do I install apps in Slack?
                <AiOutlineDown />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="p-2">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </AccordionItemPanel>
          </AccordionItem>
          {/*  */}
          <AccordionItem className="border-b-[1px] border-[#99999E]">
            <AccordionItemHeading>
              <AccordionItemButton className="flex items-center justify-between gap-1 w-full bg-[#fff] py-4 px-2">
                Are Slack apps free?
                <AiOutlineDown />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="p-2">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </AccordionItemPanel>
          </AccordionItem>
          {/*  */}
          <AccordionItem className="border-b-[1px] border-[#99999E]">
            <AccordionItemHeading>
              <AccordionItemButton className="flex items-center justify-between gap-1 w-full bg-[#fff] py-4 px-2">
                How do I build a Slack app?
                <AiOutlineDown />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="p-2">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </AccordionItemPanel>
          </AccordionItem>
          {/*  */}
          <AccordionItem className="border-b-[1px] border-[#99999E]">
            <AccordionItemHeading>
              <AccordionItemButton className="flex items-center justify-between gap-1 w-full bg-[#fff] py-4 px-2">
                How do I create a workflow in Slack?
                <AiOutlineDown />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="p-2">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </AccordionItemPanel>
          </AccordionItem>
          {/*  */}
          <AccordionItem className="border-b-[1px] border-[#99999E]">
            <AccordionItemHeading>
              <AccordionItemButton className="flex items-center justify-between gap-1 w-full bg-[#fff] py-4 px-2">
                How do I become a Slack technology partner?
                <AiOutlineDown />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="p-2">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
