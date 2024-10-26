import { useState, useCallback } from "react";
import { v4 as uuid } from 'uuid'

export function ColourSchemeBlock({ mode, scheme }) {
  const [copiedValue, setCopiedValue] = useState(null)

  const copyToClipboard = useCallback((value) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedValue(value)
      setTimeout(() => setCopiedValue(null), 3000)
    })
  }, [])

  return (
    <div className="colour-scheme-block">
      <h2>{scheme}</h2>
      <ul>
        {mode?.map(colours =>
          <li style={{ backgroundColor: colours.hex.value, color: colours.contrast.value }}
            key={uuid()}
            onClick={() => copyToClipboard(colours.hex.value)}
          >
            {colours.hex.value}
          </li>
        )
        }

      </ul>
    </div>
  )
}

export default ColourSchemeBlock