import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import data from "./FAQDATA.json";

function Faq(props) {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <div className="faq-questions">
        <h4 className="faq" style={{marginTop:"7rem"}}>Frequently Asked Questions</h4>
      </div>
      <img src="https://parkplus-bkt-img.parkplus.io/production/website/public/faq_background_20240606155601260414.webp" height="1200" width="1200" class="FAQ_bg_image__mfTNP" alt="bg-image"></img>
      <Accordion open={open} toggle={toggle}>
        {data?.map((list, index) => {
          return (
            <AccordionItem>
              <AccordionHeader targetId={index + 1}>{list.que}</AccordionHeader>
              <AccordionBody accordionId={index + 1}>{list.ans}</AccordionBody>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

export default Faq;
