import { shallow, mount, render } from 'enzyme';

jest.dontMock('../Button');

const Button = require('../Button');

describe('Button', () => {
    it("should contains button element", () => {
        expect(shallow(<Button />).is('button')).toBe(true);
    });
});
