'use client'
import React, { useRef } from "react";
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import Image from "next/image";
import q1 from '../../public/1q.svg'
import '../pdf/fonts/fonts.css';
function HtmlToImageToPdf() {
  const htmlRef = useRef(null);

  const handleDownload = () => {
    // Check if the ref is currently pointing to an HTMLElement
    if (htmlRef.current) {
      // convert the html to a png image
      html2canvas(htmlRef.current).then((canvas) => {
        // create a pdf document
        const pdf = new jsPDF("l", "mm", "a4");

        // get the image data
        const imgData = canvas.toDataURL("image/png");

        // get the width and height of the PDF document
        // const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfWidth = window.innerWidth * 0.2645833333;
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        // add the image as a page
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

        // download the pdf
        pdf.save("download.pdf");
      });
    }
  };

  return (
    <div>
      <div ref={htmlRef}>
        <section className="bg-[url('/ctf.png')] bg-contain w-[297mm] h-[210mm] bg-no-repeat">
          <div className="flex flex-col justify-center items-center h-full py-[205px]">
            <div className="grid grid-cols-2 gap-[122px]">
              <div className="flex flex-col justify-center text-center items-center font-['Times New Roman'] gap-1 w-[391px] h-[300px]">
                <p className="font-extrabold text-[17.5pt] pt-px font-['HelveticaNowMTTextRegular']">6th ENGINEERING DAY</p>
                <p className="text-[14pt] font-['HelveticaNowMTTextRegular'] font-normal">AWARDS 2023</p>
                <p className="text-[17.5pt] font-extrabold leading-7 font-['HelveticaNowMTTextRegular']">CERTIFICATE OF APPRECIATION</p>
                <p className="text-[13pt] font-['serif']">is hereby awarded to</p>
                <p className=" text-[17.5pt] font-extrabold font-['HelveticaNowMTTextRegular']">MR. SEN SUNNENG</p>
                <div className="text-[13pt] text-center font-['serif']">
                  <p className="">in recognition for winning the</p>
                  <p className="">1st Award for top project entitled</p>
                  <div className="flex italic">
                    <p>&quot;Aleo Vera: Production & Processing&quot;</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-1 w-[391px] h-[300px]">
                <p className="font-[KhmerMoulLight] text-[16pt] pt-1">ទិវាវិស្វកម្មលើកទី៦</p>
                <p className="font-[KhmerBTB] text-[13pt]">ជ័យលាភីឆ្នាំ២០២៣</p>
                <p className="font-[KhmerMoulLight] text-[16pt]">ប័ណ្ណសរសើរ</p>
                <p className="font-[KhmerBTB] text-[13pt]">ជូនចំពោះ</p>
                <p className="font-[KhmerMoulLight] text-[18pt]">លោក សេន ស៊ុនណេង</p>
                <div className="font-[KhmerOSSiemreap] text-[12pt] text-center">
                  <p className="">ដែលទទួលបានជ័យលាភី</p>
                  <p className="">គម្រោងឆ្នើមលេខ ១ ក្រោមប្រធាមបទ</p>
                  <span className="font-['serif'] text-[13pt] italic">&quot;Aleo Vera: Production & Processing&quot;</span>
                </div>
              </div>
            </div>
            <div className="pb-12 mt-1">
              <p className="font-[KhmerOSSiemreap] text-[11.54pt]">រាជធានីភ្នំពេញ ថ្ងៃទី២១ ខែវិច្ឆិកា ឆ្នាំ២០២៣</p>
              <p className="font-['serif'] text-[13.02pt] mb-2">Phnom Penh, 21 November 2023</p>
            </div>
          </div>
        </section>
      </div>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
}

export default HtmlToImageToPdf;
