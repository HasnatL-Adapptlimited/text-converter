function decodeIso88591ToUtf8(encodedStr: string): string {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder("iso-8859-1");

  // Convert the string to ISO-8859-1 bytes
  const isoBytes = encoder.encode(encodedStr);

  // Decode the ISO-8859-1 bytes to UTF-8
  return decoder.decode(isoBytes);
}

// Example usage
const input = [
  "Since the first cases of pandemic (H1N1) 2009 influenza were reported in April, the notification requirements under Article 6 of the International Health Regulations (IHR) (2005) have been widely used to ensure the timely reporting of laboratory-confirmed cases from National Authorities through National IHR Focal Points (NFPs) from countries around the world.Â  As of 10 July, WHO had recorded over 104,000 cases, including 466 deaths, worldwide.Â  Some countries are reaching the peak of their first pandemic wave while others have yet to report cases.Â  The evolving epidemiological situation requires a change in the approach to virological and epidemiological surveillance from confirming every case and daily reports of aggregated data, to testing a sample of clinical specimens and monitoring the pandemic using indicators of acute respiratory illness at population level.Â  Updated WHO guidance on surveillance needs during the pandemic are described in the updated WHO guidance Human infection with pandemic (H1N1) 2009 virus: Updated interim WHO guidance on global surveillance [http://www.who.int/csr/disease/swineflu/notes/h1n1_surveillance_20090710/en/index.html].Â  WHO recommends that all countries continue to carry out event-based surveillance (e.g. clusters of acute respiratory disease and deaths) as well as starting pandemic monitoring.Â  Monitoring deaths associated with acute respiratory disease is important throughout the pandemics. At this time, National Authorities and WHO IHR Contact Points in the WHO Regional Offices may consider supplementing direct communications with the NFPs with additional arrangements for communicating the requested surveillance information to WHO. Where there are specific regional arrangements being implemented, WHO Regional Offices will inform NFPs and other national authorities concerned. Surveillance information may be provided through official websites, contact points in surveillance units, National Influenza Centres (NICs) or other appropriate structure, while NFPs should remain fully informed in compliance with paragraph 2 of Article 6 of the IHR. If an information source other than the NFP is selected as the reporting mechanism, the NFP must inform WHO IHR Contact Points*, with copy to WHO Headquarters (ihradmin@who.int), of the new arrangements before implementation.Â  Throughout the pandemic, WHO will continue to communicate directly with the NFPs to request specific information for risk assessment and risk management.",
  "2023-09-19",
  "E0001-38983",
  "TÃ¼rkiye",
  "CÃ´te d'Ivoire",
  "CÃ'te d'Ivoire",
];

input.forEach((str) => {
  console.log(`Encoded: ${str}`);
  console.log(`Decoded: ${decodeIso88591ToUtf8(str)}`);
});

console.log(JSON.stringify(input, null, 2));
console.log(input);
