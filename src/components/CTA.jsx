import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <>
      <h2 className="mt-6 text-4xl sm:text-5xl text-customBlue font-bold">
        Testimonials
      </h2>
      <div className="mt-4 grid sm:grid-cols-2 gap-4">
        {/* testimonial 1 */}
        <div className="bg-customBlue p-3 text-white rounded flex gap-4">
          <img
            src="/public/star-img.png"
            alt="head-shot"
            className="w-1/5 object-contain rounded"
          />
          <div className="flex flex-col">
            <h3 className="font-bold">Ryan Watson</h3>
            <p className="mt-2">
              "I couldn’t be happier with James’ work and commitment; I’d
              recommend him to anyone in need of a web developer."
            </p>
          </div>
        </div>
        {/* testimonial 2 */}
        <div className="bg-customBlue p-3 text-white rounded flex gap-4">
          <img
            src="/public/star-img.png"
            alt="head-shot"
            className="w-1/5 object-contain rounded"
          />
          <div className="flex flex-col">
            <h3 className="font-bold">Alison Davey</h3>
            <p className="mt-2">
              "James is an innovative individual, constantly challenging the
              norm and striving to get better results. He encourages everyone
              around him to do the same and offers advice and support no matter
              your goals."
            </p>
          </div>
        </div>
        {/* testimonial 3 */}
        <div className="bg-customBlue p-3 text-white rounded flex gap-4">
          <img
            src="/public/star-img.png"
            alt="head-shot"
            className="w-1/5 object-contain rounded"
          />
          <div className="flex flex-col">
            <h3 className="font-bold">Gemma Threlfall</h3>
            <p className="mt-2">
              "James has had such a huge impact on my life and career, he has
              not only helped me achieve a goal I thought I would never achieve.
              He has given me so much advice along the way, at a time when I was
              ready to give up on my career and thought maybe I just wasn’t good
              enough."
            </p>
          </div>
        </div>
        {/* testimonial 4 */}
        <div className="bg-customBlue p-3 text-white rounded flex gap-4">
          <img
            src="/public/star-img.png"
            alt="head-shot"
            className="w-1/5 object-contain rounded"
          />
          <div className="flex flex-col">
            <h3 className="font-bold">Maryam Ahmed</h3>
            <p className="mt-2">
              "James supported me in creating a digital portfolio and was
              genuinely curious about how my job search was going and motivated
              me not to give up!"
            </p>
          </div>
        </div>
        {/* testimonial 5 */}
        <div className="bg-customBlue p-3 text-white rounded flex gap-4">
          <img
            src="/public/star-img.png"
            alt="head-shot"
            className="w-1/5 object-contain rounded"
          />
          <div className="flex flex-col">
            <h3 className="font-bold">Robb Davis</h3>
            <p className="mt-2">
              "James' approach to marketing is friendly and approachable; he
              also goes out of his way to reply to my emails at the crack of
              dawn, answering any further questions or recommending marketing
              tools. I've since landed a permanent role, and I don't think I
              could have done it without the help of James."
            </p>
          </div>
        </div>
        {/* testimonial 6 */}
        <div className="bg-customBlue p-3 text-white rounded flex gap-4">
          <img
            src="/public/star-img.png"
            alt="head-shot"
            className="w-1/5 object-contain rounded"
          />
          <div className="flex flex-col">
            <h3 className="font-bold">Valentina Wallace</h3>
            <p className="mt-2">
              "James was very resourceful, I had learned a lot from him,
              especially as a recent graduate who had limited experience of
              digital marketing at the time, and thanks to him I was able to
              embark on a career within the industry!"
            </p>
          </div>
        </div>
      </div>

      <div className="grid">
        <div>
          <h3 className="mt-12 text-4xl text-customBlue">
            Download some examples of my work...
          </h3>
          <p className="mt-4">
            Click the boxes below to open up a new window and explore some of
            the work I've created over the past few years.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 justify-center items-center ">
          <a href="https://www.canva.com/design/DAGDCdPfpws/_wVrsnP6ncX9l1XErETK2g/view?utm_content=DAGDCdPfpws&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview">
            <img
              src="/public/Graphic Design Examples Cover.png"
              className="w-full shadow-2xl cursor-pointer"
              alt="james alderman graphic designs"
            />
          </a>
          <a href="https://www.canva.com/design/DAGDIa7pgTc/-NUYsZAazLSeZJGYdYsuSQ/view?utm_content=DAGDIa7pgTc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview#1">
            <img
              src="/public/Content Examples Cover.png"
              className="w-full shadow-2xl cursor-pointer"
              alt="james alderman content examples"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default CTA;
