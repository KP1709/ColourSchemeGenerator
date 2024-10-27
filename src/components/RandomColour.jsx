import React from "react";
import { useQuery } from "@tanstack/react-query";

import { getRandomColour } from "../apiCalls";
import { getRandomColourContrast } from "../apiCalls";
import { getMonochromeLightColourScheme } from "../apiCalls";
import { getMonochromeDarkColourScheme } from "../apiCalls";
import { getMonochromeColourScheme } from "../apiCalls";
import { getComplementColourScheme } from "../apiCalls";
import { getAnalogicComplementColourScheme } from "../apiCalls";
import { getAnalogicColourScheme } from "../apiCalls";
import { getTriadColourScheme } from "../apiCalls";
import { getQuadColourScheme } from "../apiCalls";
import ColourSchemeBlock from "./ColourSchemeBlock";


export default function RandomColour() {
  const { data: randomColour, refetch, isLoading, error } = useQuery({
    queryKey: ["hexColour"],
    queryFn: getRandomColour,
    refetchOnWindowFocus: false
  });

  const { data: randomColourContrast } = useQuery({
    queryKey: ['randomColourContrast', randomColour],
    queryFn: () => getRandomColourContrast(randomColour),
    enabled: !!randomColour,
  })

  const { data: monochromeScheme } = useQuery({
    queryKey: ['monochromeScheme', randomColour, { suspense: true }],
    queryFn: () => getMonochromeColourScheme(randomColour),
    enabled: !!randomColourContrast,
  })

  const { data: monochromeDarkScheme } = useQuery({
    queryKey: ['monochromeDarkScheme', randomColour],
    queryFn: () => getMonochromeDarkColourScheme(randomColour),
    enabled: !!randomColourContrast,
  })

  const { data: monochromeLightScheme } = useQuery({
    queryKey: ['monochromeLightScheme', randomColour],
    queryFn: () => getMonochromeLightColourScheme(randomColour),
    enabled: !!randomColourContrast,
  })

  const { data: analogicScheme } = useQuery({
    queryKey: ['analogicScheme', randomColour],
    queryFn: () => getAnalogicColourScheme(randomColour),
    enabled: !!randomColourContrast,
  })

  const { data: complementScheme } = useQuery({
    queryKey: ['complementScheme', randomColour],
    queryFn: () => getComplementColourScheme(randomColour),
    enabled: !!randomColourContrast,
  })

  const { data: analogicComplementScheme } = useQuery({
    queryKey: ['analogicComplementScheme', randomColour],
    queryFn: () => getAnalogicComplementColourScheme(randomColour),
    enabled: !!randomColourContrast,
  })

  const { data: triadScheme } = useQuery({
    queryKey: ['triadScheme', randomColour],
    queryFn: () => getTriadColourScheme(randomColour),
    enabled: !!randomColourContrast,
  })

  const { data: quadScheme } = useQuery({
    queryKey: ['quadScheme', randomColour],
    queryFn: () => getQuadColourScheme(randomColour),
    enabled: !!randomColourContrast,
  })

  if (isLoading) return <div id="colour-scheme-loading">Generating random colour...</div>;
  if (error) return <div id="colour-scheme-error" >An error occurred: {error.message}</div>;

  return (
    <>
      <div id="colour-scheme-main">
        <div id="colour-scheme-randomColour">
          <p style={{ backgroundColor: `#${randomColour}`, color: randomColourContrast }}>#{randomColour.toUpperCase()}</p>
          <button onClick={() => refetch()} aria-label="Get new random colour">&#8635;</button>
        </div>

        <p id="colour-scheme-message">Tap a colour to copy the hex code</p>
        
        <div id="colour-scheme-blocks">
          <ColourSchemeBlock mode={monochromeScheme} scheme='Monochrome' />
          <ColourSchemeBlock mode={monochromeDarkScheme} scheme='Monochrome Dark' />
          <ColourSchemeBlock mode={monochromeLightScheme} scheme='Monochrome Light' />
          <ColourSchemeBlock mode={analogicScheme} scheme='Analogic' />
          <ColourSchemeBlock mode={complementScheme} scheme='Complement' />
          <ColourSchemeBlock mode={analogicComplementScheme} scheme='Analogic Complement' />
          <ColourSchemeBlock mode={triadScheme} scheme='Triad' />
          <ColourSchemeBlock mode={quadScheme} scheme='Quad' />
        </div>
      </div>
    </>
  );
};

