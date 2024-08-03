"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { tabs, durations } from "@/app/core/data";

const montserrat = Montserrat({ subsets: ["latin"] });

const images = [
  "/chart.png",
  "/chart-1.png",
  "/chart-2.png",
  "/chart-3.png",
  "/chart.png",
  "/chart-1.png",
  "/chart-2.png",
];

export default function Stats() {
  const [activeDuration, setActiveDuration] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  return (
    <section className={`${montserrat.className} bg-[#222831] p-5 md:p-20`}>
      <div
        className={`max-w-[1000px] md:h-[800px] p-5 md:p-[60px] bg-white mx-auto rounded-3xl shadow-[0_6px_20px_rgba(255,255,255,20%)] ${
          isFullscreen ? "w-full h-auto fixed top-0 left-0 z-50 p-10" : ""
        }`}
      >
        <div className="flex flex-col gap-5 md:gap-10">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <h1 className="text-3xl md:text-[70px] md:leading-[88px] text-dark-blue">
                63,179.71
              </h1>
              <p className="md:text-2xl text-[#BDBEBF]">USD</p>
            </div>
            <div>
              <p className="text-sm md:text-lg text-[#67BF6B]">
                + 2,161.42 (3.54%)
              </p>
            </div>
          </div>
          <div>
            <TabGroup as="div" className="flex flex-col gap-10">
              <TabList className="flex sticky overflow-x-auto gap-2 pb-2 md:gap-6 text-[#6F7177] font-medium">
                {tabs.map(({ tab }, index) => (
                  <Tab
                    key={index}
                    className={({ selected }) =>
                      `hover:shadow-[0_6px_20px_rgba(93,93,93,30%)] px-2 py-2 bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear ${
                        selected
                          ? "border-b-4 border-[#4B40EE] rounded-none hover:shadow-none"
                          : ""
                      }`
                    }
                    onClick={() => setActiveTab(index)}
                  >
                    {tab}
                  </Tab>
                ))}
              </TabList>
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-28">
                <div className="flex  gap-2 sm:gap-[30px]">
                  <button
                    className="flex sticky overflow-x-auto gap-[10px] p-2"
                    onClick={() => setIsFullscreen(!isFullscreen)}
                  >
                    <Image width={24} height={24} src="icon-1.svg" alt="icon" />
                    <p>Fullscreen</p>
                  </button>
                  <button className="flex gap-[10px] p-2">
                    <Image width={24} height={24} src="icon.svg" alt="icon" />
                    <p>Compare</p>
                  </button>
                </div>
                {activeTab === 1 && (
                  <div className="flex sticky overflow-x-auto pb-2 gap-5">
                    {durations.map(({ duration }, index) => (
                      <button
                        key={index}
                        className={`text-lg p-2 rounded-md font-light transition duration-200 ease-linear ${
                          activeDuration === index
                            ? "bg-[#4B40EE] text-white"
                            : "text-[#6F7177] hover:shadow-[0_6px_20px_rgba(93,93,93,30%)] bg-[#fff]"
                        }`}
                        onClick={() => setActiveDuration(index)}
                      >
                        {duration}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <TabPanels>
                <TabPanel>
                  The title of the chart is &apos;Global Smartphone Market Share
                  2023&apos;. It depicts the market share of leading smartphone
                  manufacturers in 2023 on the x-axis and the percentage market
                  share on the y-axis. Samsung holds the largest market share at
                  22%, followed by Apple at 18%. There&apos;s a significant gap
                  between these two leading brands and the rest of the market.
                  Notably, Chinese manufacturers Xiaomi, Oppo, and Vivo
                  collectively hold a combined share of 35%, indicating their
                  growing presence in the global market. In conclusion, the
                  smartphone market remains dominated by a few major players,
                  but Chinese manufacturers are gaining significant ground.
                </TabPanel>
                <TabPanel>
                  <Image
                    width={839}
                    height={343}
                    src={
                      activeDuration !== null
                        ? images[activeDuration]
                        : "/chart.png"
                    }
                    alt="chart"
                    className="w-full max-w-[898px] max-h-[343px]"
                  />
                </TabPanel>
                <TabPanel>Stats dummy data</TabPanel>
                <TabPanel>Analysis dummy data</TabPanel>
                <TabPanel>Settings data</TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
