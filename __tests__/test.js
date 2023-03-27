import * as React from "react";
import axios from "axios";
import renderer from "react-test-renderer";
import { CardList } from "../components/cards/CardList";
import { getBestPractices } from "../API/getBestPractices";

jest.mock("axios");

it(`renders the list correctly`, async () => {
  const data = await getBestPractices();
  const component = renderer.create(<CardList data={data} />).toJSON();
  expect(component).toMatchSnapshot();
});
