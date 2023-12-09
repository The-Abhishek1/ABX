import React from "react";
import at from "./AllTemplate.module.css";
import star from "./star.svg";
import hashtag from "./hashtag.svg";
import link from "./link.svg";
import ktip from "./ktip.svg";
function AllTemplate() {
  return (
    <>
      <div className={at.container}>
        <div className={at.items}>
          <img src={star} alt="" />
          <div className={at.heading}>Review Responder</div>
          <div>
            Generate an accurate & friendly response based on a customer review.
          </div>
        </div>
        <div className={at.items}>
          <img src={hashtag} alt="" />
          <div className={at.heading}>Hashtag Generator</div>
          <div>
            Generate outstanding hashtags for instagram and social media.
          </div>
        </div>
        <div className={at.items}>
          <img src={link} alt="" />
          <div className={at.heading}>SEO Keywords</div>
          <div>
            Generate high-converting SEO keywords from a subject, name, and so
            on.
          </div>
        </div>
        <div className={at.items}>
          <img src={ktip} alt="" />
          <div className={at.heading}>Business Idea Generator</div>
          <div>
            Generate some business ideas based on topics, preferances, or
            budgets.
          </div>
        </div>
        <div className={at.items}>
          <img src={star} alt="" />
          <div className={at.heading}>Article Generator</div>
          <div>
            Generate incredbly clcikable and SEO Friendly article content.
          </div>
        </div>
        <div className={at.items}>
          <img src={hashtag} alt="" />
          <div className={at.heading}>Plagiarism Checker</div>
          <div>Plagiarism checker for sentences and content.</div>
        </div>
        <div className={at.items}>
          <img src={link} alt="" />
          <div className={at.heading}>Pet Name Generator</div>
          <div>Generate a great name for your pet.</div>
        </div>
        <div className={at.items}>
          <img src={ktip} alt="" />
          <div className={at.heading}>Content translator</div>
          <div>Translate any type of content into your favourite language.</div>
        </div>
        <div className={at.items}>
          <img src={ktip} alt="" />
          <div className={at.heading}>Domain Name Generator</div>
          <div>Generate a great name for your domain.</div>
        </div>
        <div className={at.items}>
          <img src={ktip} alt="" />
          <div className={at.heading}>Bootstrap to Tailwind Convertor</div>
          <div>Convert any Bootstrap code into Tailwind</div>
        </div>
        <div className={at.items}>
          <img src={hashtag} alt="" />
          <div className={at.heading}>Plagiarism Checker</div>
          <div>Plagiarism checker for sentences and content.</div>
        </div>
        <div className={at.items}>
          <img src={link} alt="" />
          <div className={at.heading}>Pet Name Generator</div>
          <div>Generate a great name for your pet.</div>
        </div>
      </div>
    </>
  );
}

export default AllTemplate;
