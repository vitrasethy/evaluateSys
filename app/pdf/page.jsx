'use client'
import React, { useRef } from "react";
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import Image from "next/image";
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
      <section className="bg-[url('/ctf.png')] bg-contain w-[1132px] h-[803px] bg-no-repeat">
        <div className="flex flex-col justify-center items-center h-full">
            <div className="grid grid-cols-2 gap-[122px] h-[280px]">
                <div className="flex flex-col justify-center items-center font-['Times New Roman'] gap-1">
                    <p className="font-bold text-[18pt] pt-px font-['HelveticaNowMTTextRegular']">6th ENGINEERING DAY</p>
                    <p className="text-[14pt] my-1">AWARDS 2023</p>
                    <p className="text-[18pt] font-bold leading-7 font-['HelveticaNowMTTextRegular']">CERTIFICATE OF APPRECIATION</p>
                    <p className="text-[13pt] my-1">is hereby awarded to</p>
                    <p className=" text-[18pt] font-bold font-['HelveticaNowMTTextRegular']">MS. CHEU SEANGHONG</p>
                    <div className="text-[13pt] text-center font-['serif']">
                    <p className="">in recognition for winning the</p>
                    <p className="">1st Award for top project</p>
                    <p className="">entitled &quot;Aleo Vera: Production & Processing&quot;</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <p className="font-[KhmerMoulLight] text-[16pt] py-1">ទិវាវិស្វកម្មលើកទី៦</p>
                    <p className="font-[KhmerBTB] text-[13pt] pt-1">ជ័យលាភីឆ្នាំ២០២៣</p>
                    <p className="font-[KhmerMoulLight] text-[16pt] pb-1">ប័ណ្ណសរសើរ</p>
                    <p className="font-[KhmerBTB] text-[13pt]">ជូនចំពោះ</p>
                    <p className="font-[KhmerMoulLight] text-[18pt] py-1">លោក សុខា រិទ្ធី</p>
                    <div className="font-[KhmerOSSiemreap] text-[12pt] text-center">
                    <p className="">ដែលទទួលបានជ័យលាភី</p>
                    <p className="">គម្រោងឆ្នើមលេខ ១ </p>
                    <p className="">ក្រោមប្រធាមបទ <span className="font-['Times New Roman'] text-[13pt]">&quot;Aleo Vera: Production & Processing&quot;</span></p>
                </div>
                    </div>
            </div>
            <div className="pb-12 mt-1">
              <p className="font-[KhmerOSSiemreap] text-[11.54pt]">រាជធានីភ្នំពេញ ថ្ងៃទី២១ ខែវិច្ឆការ ឆ្នាំ២០២៣</p>
              <p className="font-['Times New Roman'] text-[13.02pt] mt-1.5">Phnom Penh, 21-November 2023</p>
            </div>
        </div>
        </section>
      </div>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
}

export default HtmlToImageToPdf;
