import { shallow } from 'enzyme';
import '../setupTests'
import NotificationItem from './NotificationItem';

describe('testing <NotificationItem/>', ()=>{
    let wrapper = shallow(<NotificationItem />);
    beforeEach(()=>{
        wrapper = shallow(<NotificationItem />);
    });

    test('it renders without crashing', ()=>{
        expect(wrapper.exists()).toEqual(true);
    });
    test('it renders type and value correctly', ()=>{
        const wrapper = shallow(<NotificationItem type="default" value="test"/>)
        expect(wrapper.find("li")).toHaveLength(1);
        const valueText = "test";
        const typeText = "default";
        expect(wrapper.find("li").text()).toContain(valueText);
        expect(wrapper.find("li").prop("data-notification-type")).toEqual(typeText);
    });
    test('it renders html prop correctly', ()=>{
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }}/>)
        expect(wrapper.find("li")).toHaveLength(1);
        expect(wrapper.find("li").html()).toEqual('<li data-notification-type=\"default\"><u>test</u></li>');
    });
})