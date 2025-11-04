"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState({});
  const services = [
    {
      name: "Go",
      url: "http://localhost:4000/api/go",
    },
    {
      name: "Python",
      url: "http://localhost:4000/api/python",
    },
    {
      name: "Php",
      url: "http://localhost:4000/api/php",
    },
    {
      name: "Nodejs",
      url: "http://localhost:4000/api/nodejs",
    },
    {
      name: "Hono",
      url: "http://localhost:4000/api/hono",
    },
  ];
  const checkStatus = async () => {
    const newStatus: Record<string, any> = {};
    for (const service of services) {
      const response = await axios.get(service.url);
      newStatus[service.name] = response.data;
    }
    setStatus(newStatus);
  }

  useEffect(() => {
    checkStatus();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-5xl font-[500]">Welcome to polyglot microservices architecture</h1>
      <div className="flex flex-col items-center justify-center gap-4">
        {Object.entries(status).map(([name, status]: any) => (
          <div key={name} className="flex items-center justify-center gap-2">
            <span className={`px-2 py-1 rounded-md font-[500] text-2xl`}>
              {name} :
            </span>
            <span className="text-lg ">{status?.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
