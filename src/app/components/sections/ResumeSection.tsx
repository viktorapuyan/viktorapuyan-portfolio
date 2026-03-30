'use client';

import { useState } from 'react';

export default function ResumeSection() {
  const pdfUrl = "/Apuyan, Viktor Angelo B. - CV.pdf";
  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 10, 200));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 10, 50));
  const handleFullscreen = () => {
    const pdfContainer = document.getElementById('pdf-container');
    if (pdfContainer?.requestFullscreen) {
      pdfContainer.requestFullscreen();
    }
  };

  return (
    <section id="resume" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 px-4">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Resume
          </h2>
          <p className="text-gray-400 text-lg">
            View and download my latest resume
          </p>
        </div>

        <div className="bg-gray-950 border border-gray-800 rounded-xl shadow-2xl overflow-hidden">
          <div className="border-b border-gray-800 px-6 py-4 bg-gray-900/50 backdrop-blur-sm">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleZoomOut}
                  className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200"
                  aria-label="Zoom Out"
                >
                  Zoom Out
                </button>
                <button
                  onClick={handleZoomIn}
                  className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200"
                  aria-label="Zoom In"
                >
                  Zoom In
                </button>
                <button
                  onClick={handleFullscreen}
                  className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200"
                  aria-label="Fullscreen"
                >
                  Fullscreen
                </button>
                <span className="text-sm text-cyan-400 font-medium">
                  Zoom: {zoom}%
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 text-sm font-medium text-gray-300 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-200"
                >
                  Open in Tab
                </a>
                <a
                  href={pdfUrl}
                  download
                  className="px-4 py-1.5 text-sm font-medium text-gray-900 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/20"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>

          <div
            id="pdf-container"
            className="w-full h-[750px] bg-gray-950 overflow-auto"
            style={{
              padding: zoom > 100 ? '20px' : '0',
            }}
          >
            <div
              style={{
                transform: `scale(${zoom / 100})`,
                transformOrigin: 'top center',
                transition: 'transform 0.2s ease-out',
              }}
            >
              <embed
                src={pdfUrl}
                type="application/pdf"
                width="100%"
                height="750px"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Can't see the resume? <a href={pdfUrl} download className="text-cyan-400 hover:text-cyan-300 underline">Download it directly</a>
        </p>
      </div>
    </section>
  );
}
