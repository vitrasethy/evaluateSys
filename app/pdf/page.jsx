"use client";
import React, { useState, useEffect} from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../pdf/fonts/fonts.css";
const data = [
  {
    id: 1,
    event: {
      name_latin: "16th Engineering Day",
      name_khmer: "ទិវាវិស្វកម្មលើកទី៦",
      year: "2023",
    },
    member: {
      name_latin: "SEN SUNNENG",
      name_khmer: "សេន ស៊ុនណេង",
      gender: "male",
    },
    project: {
      project_id: "IG801",
      rank: 1,
      project_name: "Aleo Vera: Production & Processing",
    },
  },
  {
    id: 2,
    event: {
      name_latin: "16th Engineering Day",
      name_khmer: "ទិវាវិស្វកម្មលើកទី៦",
      year: "2023",
    },
    member: {
      name_latin: "SOKHA RITHY",
      name_khmer: "សុខា រិទ្ធី",
      gender: "male",
    },
    project: {
      project_id: "IG802",
      rank: 2,
      project_name: "Evaluate System",
    },
  },
  {
    id: 3,
    event: {
      name_latin: "16th Engineering Day",
      name_khmer: "ទិវាវិស្វកម្មលើកទី៦",
      year: "2023",
    },
    member: {
      name_latin: "SENG VEHA",
      name_khmer: "សេង វេហា",
      gender: "male",
    },
    project: {
      project_id: "IG803",
      rank: 3,
      project_name: "E-Books Library",
    },
  },
];
function HtmlToImageToPdf() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  String.prototype.toKhmerDigit = function () {
    var id = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];
    return this.replace(/[0-9]/g, function (w) {
      return id[+w];
    });
  };

  const handleDownload = async () => {
    setIsDownloading(true);
  const elements = document.querySelectorAll('.myDivClass');
    const canvases = await Promise.all(Array.from(elements).map(element => html2canvas(element, {scale: 4})));

    const pdf = new jsPDF("l", "mm", "a4");

    canvases.forEach((canvas, index) => {
      const imgData = canvas.toDataURL('image/jpeg');
      const pdfWidth = 297;
      const pdfHeight = 210;
      // Add the image to the PDF
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);

      // Add a new page for the next image if it's not the last image
      if (index < canvases.length - 1) {
        pdf.addPage();
      }
    });

    pdf.save('download.pdf');
    setIsDownloading(false);
    setIsDownloaded(true);
  };

  useEffect(() => {
    if (isDownloaded) {
      setTimeout(() => setIsDownloaded(false), 2000);
    }
  }, [isDownloaded]);
  return (
    <div>
      <div>
        {data.map((data) => (
          <section
            key={data.id}
            className="myDivClass bg-[url('/ctf.png')] bg-contain w-[297mm] h-[210mm] bg-no-repeat"
          >
            <div className="flex flex-col justify-center items-center h-full">
              <div className="pt-[5rem]">
                <div className="grid grid-cols-2 gap-[122px]">
                  <div className="flex flex-col justify-center text-center items-center font-['Times New Roman'] gap-1 w-[391px] h-[300px]">
                    <p className="font-extrabold text-[17.5pt] pt-px font-['HelveticaNowMTTextRegular']">
                      {data.event.name_latin}
                    </p>
                    <p className="text-[14pt] font-['HelveticaNowMTTextRegular'] font-normal">
                      AWARDS {data.event.year}
                    </p>
                    <p className="text-[17.5pt] font-extrabold leading-7 font-['HelveticaNowMTTextRegular']">
                      CERTIFICATE OF APPRECIATION
                    </p>
                    <p className="text-[13pt] font-['serif']">
                      is hereby awarded to
                    </p>
                    <p className=" text-[17.5pt] font-extrabold font-['HelveticaNowMTTextRegular']">
                      MR. {data.member.name_latin}
                    </p>
                    <div className="text-[13pt] text-center font-['serif']">
                      <p className="">in recognition for winning the</p>
                      <p className="">
                        {data.project.rank} Award for top project entitled
                      </p>
                      <div className="flex italic">
                        <p>&quot;{data.project.project_name}&quot;</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-1 w-[391px] h-[300px]">
                    <p className="font-[KhmerMoulLight] text-[16pt] pt-1">
                      {data.event.name_khmer}
                    </p>
                    <p className="font-[KhmerBTB] text-[13pt]">
                      ជ័យលាភីឆ្នាំ {data.event.year.toKhmerDigit()}
                    </p>
                    <p className="font-[KhmerMoulLight] text-[16pt]">
                      ប័ណ្ណសរសើរ
                    </p>
                    <p className="font-[KhmerBTB] text-[13pt]">ជូនចំពោះ</p>
                    <p className="font-[KhmerMoulLight] text-[18pt]">
                      លោក {data.member.name_khmer}
                    </p>
                    <div className="font-[KhmerOSSiemreap] text-[12pt] text-center">
                      <p className="">ដែលទទួលបានជ័យលាភី</p>
                      <p className="">
                        គម្រោងឆ្នើមលេខ{" "}
                        {data.project.rank.toString().toKhmerDigit()}{" "}
                        ក្រោមប្រធាមបទ
                      </p>
                      <span className="font-['serif'] text-[13pt] italic">
                        &quot;{data.project.project_name}&quot;
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-center pb-12 mt-1">
                  <p className="font-[KhmerOSSiemreap] text-[11.54pt]">
                    រាជធានីភ្នំពេញ ថ្ងៃទី២១ ខែវិច្ឆិកា ឆ្នាំ២០២៣
                  </p>
                  <p className="font-['serif'] text-[13.02pt] mb-2">
                    Phnom Penh, 21 November 2023
                  </p>
                </div>
              </div>
              <div className="text-start w-full px-[7.5rem] pt-[5rem] text-xs text-gray-400">
                {" "}
                {data.project.project_id}
              </div>
            </div>
          </section>
        ))}
      </div>
      <div className="flex justify-end w-[297mm]">
        <button
          onClick={handleDownload}
          className="mt-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-30 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          {isDownloading
            ? "Downloading..."
            : isDownloaded
            ? "Download Complete!"
            : "Download PDF"}
        </button>
      </div>
    </div>
  );
}

export default HtmlToImageToPdf;

