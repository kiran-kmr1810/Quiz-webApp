import React from "react";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import renderer from 'react-test-renderer';
import {
    Link,
} from '@chakra-ui/react'

Enzyme.configure({ adapter: new Adapter() });


it('renders correctly', () => {
        const tree = renderer
          .create(<Link page="http://localhost:3000/">Quizzy</Link>)
          .toJSON();
        expect(tree).toMatchSnapshot();
});


it('renders correctly', () => {
        const tree = renderer
          .create(<Link page="http://localhost:3000/shome">shome</Link>)
          .toJSON();
        expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
    const tree = renderer
      .create(<Link page="http://localhost:3000/fhome">fhome</Link>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});


it('renders correctly', () => {
    const tree = renderer
      .create(<Link page="http://localhost:3000/createquiz">createquiz</Link>)
      .toJSON();
    expect(tree).toMatchSnapshot();

});

it('renders correctly', () => {
    const tree = renderer
      .create(<Link page="http://localhost:3000/quiz">quiz</Link>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});
