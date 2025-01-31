import React from "react";

function paper() {
  return (
    <>
      <div className="h-auto sm:text-justify p-10 mt-16">
        <h1 className="inline text-xs font-bold xs:max-sm:text-lg sm:text-xl bg-yellow-300 border-black border-2 p-2 text-black rounded-[7px] shadow-heading">
          Paper Submission Guidlines
        </h1>
        <ul className="list-disc mt-6 list-inside w-[90%] ml-2 sm:ml10">
          <li className="sm:text-lg text-base mb-4">
            <strong>Title:</strong> A concise and informative title.
          </li>
          <li className="sm:text-lg text-base mb-4">
            <strong>Authors:</strong> Full names, affiliations and e-mail
            addresses of all authors.
          </li>
          <li className="sm:text-lg text-base mb-4">
            <strong>Abstract:</strong> A summary (150-250 words) of the
            research, objectives, methodology, results, and conclusions.
          </li>
          <li className="sm:text-lg text-base mb-4">
            <strong>Keywords:</strong> 5-4 keywords relevant to the paper.
          </li>
          <li className="sm:text-lg text-base mb-4">
            <strong>Main Content:</strong> Should typically include:
            <ul className="list-disc  list-inside w-[90%] ml-[10%] sm:ml10">
              <li className="sm:text-lg text-base ">Introduction</li>
              <li className="sm:text-lg text-base">Literature Review</li>
              <li className="sm:text-lg text-base ">Methodology</li>
              <li className="sm:text-lg text-base ">Results and Discussion</li>
              <li className="sm:text-lg text-base ">
                Conclusion and future work
              </li>
            </ul>
          </li>
          <li className="sm:text-lg text-base mb-4">
            <strong>References:</strong> Use APA style.
          </li>
          <li className="sm:text-lg text-base mb-4">
            <strong>Font and Size:</strong> Use Times New Roman, 12 point font
            size.
          </li>{" "}
          <li className="sm:text-lg text-base mb-4">
            <strong>Heading Size:</strong> Times New Roman 14 point font size.
          </li>{" "}
          <li className="sm:text-lg text-base mb-4">
            <strong>Margins:</strong> 1 inch margins on all sides.
          </li>{" "}
          <li className="sm:text-lg text-base mb-4">
            <strong>Spacing:</strong> Single or double spacing as per template
            instructions.
          </li>
        </ul>
      </div>
      <div className="h-auto sm:text-justify p-10 mt-2">
        <h1 className="inline text-xs font-bold xs:max-sm:text-lg sm:text-xl bg-yellow-300 border-black border-2 p-2 text-black rounded-[7px] shadow-heading">
            Paper Submission Details
        </h1>
        <ul className="list-disc mt-6 w-[90%] ml-5 sm:ml10">
          <li className="sm:text-lg text-base mb-4">
            <strong>Submission Process:</strong> All full papers will undergo peer review based on originality, technical rigor, research
            depth, correctness, relevance, and contributions to the research community.
          </li>
          <li className="sm:text-lg text-base mb-4">
            <strong>Publication:</strong> Accepted and registered papers will be published in the conference proceedings of IIPA with
            an ISBN.
          </li>
          <li className="sm:text-lg text-base mb-4">
            <strong>Author Participation:</strong> For papers with multiple authors, at least one author must register and present the
            paper to receive a presentation/publication certificate.
          </li>
        </ul>
      </div>
      <div className="h-auto sm:text-justify p-10 mt-2">
        <h1 className="inline text-xs font-bold xs:max-sm:text-lg sm:text-xl bg-yellow-300 border-black border-2 p-2 text-black rounded-[7px] shadow-heading">
        Publication
        </h1>
        <ul className="list-disc mt-6 w-[90%] ml-5 sm:ml10">
          <li className="sm:text-lg text-base mb-4">
            Papers will be published in the conference proceedings of IIPA with an ISBN.
          </li>
          <li className="sm:text-lg text-base mb-4">
            Sage publications (Scopus Indexed) Special Issue (proposed)
          </li>
        </ul>
        <div className="pt-16">
        <h1 className="inline  font-bold text-lg sm:text-2xl bg-yellow-300 border-black border-2 p-2 text-black rounded-[7px] shadow-heading">Important Dates</h1>
      <div className="grid sm:grid-cols-custom grid-cols-custom-1 mt-10">
      <div className="grid grid-rows-6 sm:gap-4 gap-6 mt-4">
        <p className='text-lg sm:text-base font-bold'>Call for Paper Open</p>
        <p className='text-lg font-bold'>Submission Deadline</p>
        <p className='text-lg font-bold'>Acceptance Notification</p>
        <p className='text-lg font-bold'>Registration Deadline</p>
        <p className='text-lg font-bold'>Conference Date</p>
        <p className='text-lg font-bold'></p>
      </div>
      <div className="grid grid-rows-6 sm:gap-4 gap-6 mt-4 ">
        <p>: 14 Jan., 2025</p>
        <p>: 10 Feb., 2025</p>
        <p>: 15 Feb., 2025</p>
        <p>: 20 Feb., 2025</p> 
        <p>: 19 Mar., 2025 (IIPA Campus) </p>
        <p>  20 Mar., 2025 (VIPS-TC Campus)</p>
       </div>
       </div>
      </div>
      </div>
    
    </>
  );
}

export default paper;
