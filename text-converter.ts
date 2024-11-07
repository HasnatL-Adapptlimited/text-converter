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
      "<P>The Emergency Committee held its fifth meeting, via e-mail, concluding on 23 September 2009. </P><P>The Committee considered a proposal from the WHO Director-General regarding the continuation of three temporary recommendations issued under the IHR with respect to the on-going public health emergency of international concern.Â  There was a consensus on continuing the three temporary recommendations proposed by the Director-General. </P><P>Having considered the views of the Emergency Committee, and the ongoing pandemic situation, the Director-General determined it was appropriate to continue these temporary recommendations, namely:</P><UL><LI>Countries should not close borders or restrict international traffic and trade</LI><LI>Intensify surveillance of unusual flu-like illness & severe pneumonia</LI><LI>If ill, it is prudent to delay international travel -- if ill after travel seek care</LI></UL>",
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
): { [K in keyof T]: string } => {
  const decodedEntries = Object.entries(obj).map(([key, value]) => {
    try {
      // Attempt to decode the value
      const decodedValue = decodeURIComponent(escape(value));

      // If successful, return the decoded value
      return [key, decodedValue] as const;
    } catch (error) {
      console.error(`Error decoding ${value}: ${error}`);

      // If decoding fails, return the original value
      return [key, value] as const;
    }
  });

  return Object.fromEntries(decodedEntries) as { [K in keyof T]: string };
};

const escapeURI = (str: string): string => {
  return encodeURIComponent(str).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16)}`
  );
};

input.data = decodeSpecialCharsInObj(input.data);

console.log(input);
