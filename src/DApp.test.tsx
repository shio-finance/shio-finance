import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"

import DApp from "./DApp"

test("renders learn react link", () => {
  render(<DApp />)
  const linkElement = screen.getByText(/learn chakra/i)
  expect(linkElement).toBeInTheDocument()
})
