import { shallow } from 'enzyme';
import Notifications from './Notifications';
import '../setupTests'

describe('testing <Notifications/>', ()=>{
    let wrapper = shallow(<Notifications />);
    beforeEach(()=>{
        wrapper = shallow(<Notifications />);
    });

    test('it renders without crashing', ()=>{
        expect(wrapper.exists()).toEqual(true);
    });
    test('it renders three list items', ()=>{
        expect(wrapper.find("li")).toHaveLength(3);
    });
    test('it renders the const text ', ()=>{
        const text = "Here is the list of notifications";
        expect(wrapper.find(".Notifications p").text()).toEqual(text);
    });
})