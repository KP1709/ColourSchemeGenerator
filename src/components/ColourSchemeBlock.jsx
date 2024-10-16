import React, { Suspense } from "react";
import {v4 as uuid} from 'uuid'

export function ColourSchemeBlock({mode, scheme}) {

  return (
    <div className="colour-scheme-block">
      <h2>{scheme}</h2>
      <Suspense fallback={<h2>Loading...</h2>}>
      <ul>
        {mode?.map(colours =>
          <li style={{ backgroundColor: colours.hex.value, color: colours.contrast.value }}
            key={uuid()}>
            {colours.hex.value}
          </li>)}
      </ul>
      </Suspense>
    </div>
  )
}

export default ColourSchemeBlock