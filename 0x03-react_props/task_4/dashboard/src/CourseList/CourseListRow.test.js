import { shallow } from 'enzyme';
import '../setupTests'
import CourseListRow from './CourseListRow';

describe('testing <CourseListRow/>', () => {
    let wrapper = shallow(<CourseListRow textFirstCell="test" />);
    beforeEach(() => {
        wrapper = shallow(<CourseListRow textFirstCell="test" />);
    });

    test('it renders without crashing', () => {
        expect(wrapper.exists()).toEqual(true);
    });
    describe('When isHeader is true', () => {
        test('When textSecondCell does not exist, it renders one cell (th) containing textFirstCell with a colSpan = 2', () => {
            const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="text1" />)
            expect(wrapper.find("th")).toHaveLength(1);
            expect(wrapper.find("th").prop("colSpan")).toEqual(2);
            expect(wrapper.find("th").text()).toContain("text1");
        });
        test('When textSecondCell is present, it renders two cell (th) containing textFirstCell and textSecondCell', () => {
            const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="text1" textSecondCell="text2" />)
            expect(wrapper.find("th")).toHaveLength(2);
            expect(wrapper.find("th").first().text()).toEqual("text1");
            expect(wrapper.find("th").at(1).text()).toEqual("text2");
        });
    });
    test('When isHeader is false it renders correctly two td elements within a tr element', () => {
        const wrapper = shallow(<CourseListRow textFirstCell="text1" textSecondCell="text2" />)
        expect(wrapper.find("tr")).toHaveLength(1);
        expect(wrapper.find("tr").children("td")).toHaveLength(2);
    });
})