import React from "react";

function ImageComponent({ src, alt }) {
  return (
    <img loading="lazy" src={src} alt={alt} className="aspect-[2.33] w-full" />
  );
}

export default function Featured() {
  return (
    <section>
      <ImageComponent
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2faeaa8348043cde0334f3dba84f43b8fc0ae625eb3772a5db17144e344f3ed4?apiKey=ff29eb85e7464976a6d2464dcda446db&"
        alt="Featured visual content"
      />
    </section>
  );
}
