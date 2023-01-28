import { shallow } from 'enzyme';
import Notifications from './Notifications';
import '../setupTests'
import NotificationItem from './NotificationItem';

describe('testing <Notifications/>', ()=>{
    let wrapper = shallow(<Notifications />);
    beforeEach(()=>{
        wrapper = shallow(<Notifications />);
    });

    test('it renders without crashing', ()=>{
        expect(wrapper.exists()).toEqual(true);
    });
    test('it renders the const text ', ()=>{
        const text = "Here is the list of notifications";
        expect(wrapper.find(".Notifications p").text()).toEqual(text);
    });
    test('it renders renders NotificationItem elements', ()=>{
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });
    test('it verifies the first NotificationItem element renders is the right html', ()=>{
        expect(wrapper.find(NotificationItem)).toBeDefined();
        expect(wrapper.find(NotificationItem).first().html()).toEqual("<li data-notification-type=\"default\">New course available</li>");
    });

})