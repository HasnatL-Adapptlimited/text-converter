// function convertWeirdCharacters(obj: Record<string, any>): Record<string, any> {
//   const decodeSpecialChars = (str: string): string => {
//     try {
//       // First, attempt to unescape the string
//       let decoded = unescape(str);

//       // If unescaping doesn't work, try our previous decoding methods
//       if (!decoded || typeof decoded !== "string" || !decoded.length) {
//         // Decode HTML entities
//         decoded = str
//           .replace(/&amp;/g, "&")
//           .replace(/&lt;/g, "<")
//           .replace(/&gt;/g, ">")
//           .replace(/&quot;/g, '"')
//           .replace(/&#39;/g, "'");

//         // Decode Unicode escape sequences
//         decoded = decoded.replace(/\\u[\dA-F]{4}/g, (match) =>
//           String.fromCharCode(parseInt(match.slice(2), 16))
//         );
//       }

//       // Handle any remaining special characters
//       return decoded.replace(/[^\x20-\x7E]/g, (char) => {
//         return char.replace(/./g, function () {
//           return String.fromCharCode(char.charCodeAt(0));
//         });
//       });
//     } catch (error) {
//       console.error("Error decoding special characters:", error);
//       return str; // Return original string if decoding fails
//     }
//   };

//   const recursiveConvert = (value: any): any => {
//     if (typeof value === "object" && value !== null) {
//       if (Array.isArray(value)) {
//         return value.map(recursiveConvert);
//       }

//       const result: Record<string, any> = {};
//       for (let key in value) {
//         if (Object.prototype.hasOwnProperty.call(value, key)) {
//           result[key] = recursiveConvert(value[key]);
//         }
//       }
//       return result;
//     }

//     if (typeof value === "string") {
//       return decodeSpecialChars(value);
//     }

//     return value;
//   };

//   return recursiveConvert(obj);
// }

// Example usage
let input = {
  test: "Hello World",
  data: {
    title:
      "Since the first cases of pandemic (H1N1) 2009 influenza were reported in April, the notification requirements under Article 6 of the International Health Regulations (IHR) (2005) have been widely used to ensure the timely reporting of laboratory-confirmed cases from National Authorities through National IHR Focal Points (NFPs) from countries around the world.Â  As of 10 July, WHO had recorded over 104,000 cases, including 466 deaths, worldwide.Â  Some countries are reaching the peak of their first pandemic wave while others have yet to report cases.Â  The evolving epidemiological situation requires a change in the approach to virological and epidemiological surveillance from confirming every case and daily reports of aggregated data, to testing a sample of clinical specimens and monitoring the pandemic using indicators of acute respiratory illness at population level.Â  Updated WHO guidance on surveillance needs during the pandemic are described in the updated WHO guidance Human infection with pandemic (H1N1) 2009 virus: Updated interim WHO guidance on global surveillance [http://www.who.int/csr/disease/swineflu/notes/h1n1_surveillance_20090710/en/index.html].Â  WHO recommends that all countries continue to carry out event-based surveillance (e.g. clusters of acute respiratory disease and deaths) as well as starting pandemic monitoring.Â  Monitoring deaths associated with acute respiratory disease is important throughout the pandemics. At this time, National Authorities and WHO IHR Contact Points in the WHO Regional Offices may consider supplementing direct communications with the NFPs with additional arrangements for communicating the requested surveillance information to WHO. Where there are specific regional arrangements being implemented, WHO Regional Offices will inform NFPs and other national authorities concerned. Surveillance information may be provided through official websites, contact points in surveillance units, National Influenza Centres (NICs) or other appropriate structure, while NFPs should remain fully informed in compliance with paragraph 2 of Article 6 of the IHR. If an information source other than the NFP is selected as the reporting mechanism, the NFP must inform WHO IHR Contact Points*, with copy to WHO Headquarters (ihradmin@who.int), of the new arrangements before implementation.Â  Throughout the pandemic, WHO will continue to communicate directly with the NFPs to request specific information for risk assessment and risk management.",
    date: "2023-09-19",
    eventId: "E0001-38983",
    country: "TÃ¼rkiye",
    country2: "CÃ´te d'Ivoire",
  },
};

// const result = convertWeirdCharacters(input);

// console.log(JSON.stringify(result, null, 2));

export const decodeSpecialCharsInObj = <T extends Record<string, string>>(
  obj: T
): { [K in keyof T]: string } =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      decodeURIComponent(escapeURI(value)),
    ])
  ) as { [K in keyof T]: string };

const escapeURI = (str: string): string => {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16)}`
  );
};

input.data = decodeSpecialCharsInObj(input.data);

console.log(input);
