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
    test('it verifies the first NotificationItem element renders is the right html', ()=>{
        const wrapper = shallow(<Notifications displayDrawer />);
        expect(wrapper.find(NotificationItem)).toBeDefined();
        expect(wrapper.find(NotificationItem).first().html()).toEqual("<li data-notification-type=\"default\">New course available</li>");
    });
    test('it verifies that the menu item is being displayed when displayDrawer is false', ()=>{
        expect(wrapper.find("div.menuItem")).toHaveLength(1);
    });
    test('it verifies  that the div.Notifications is not being displayed when displayDrawer is false', ()=>{
        expect(wrapper.find("div.Notifications")).toHaveLength(0);
    });
    test('it verifies that the menu item is being displayed when displayDrawer is true', ()=>{
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find("div.menuItem")).toHaveLength(1);
    });
    test('it verifies that the menu item is being displayed when displayDrawer is true', ()=>{
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find("div.Notifications")).toHaveLength(1);
    });
})