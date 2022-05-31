import React from "react";
import Main from "./Main";
import { shallow } from "enzyme/build";

describe('Main Component', () => {
    test('it should render without errors', () => {
        const component = shallow( < Main / > );
        const wrapper = component.find('[test-attr="testMe"]')
        expect(wrapper.length).toBe(1);
    })
})