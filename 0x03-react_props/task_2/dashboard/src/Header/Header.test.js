import { shallow } from 'enzyme';
import Header from './Header';
import '../setupTests'

describe('testing <Header/>', ()=>{
    let wrapper = shallow(<Header />);
    beforeEach(()=>{
        wrapper = shallow(<Header />);
    });

    test('it renders without crashing', ()=>{
        expect(wrapper.exists()).toEqual(true);
     
    });
    test('it renders a tag h1 and the logo', ()=>{
        const text = "School dashboard"
        expect(wrapper.find("h1").text()).toEqual(text);
        expect(wrapper.find("img")).toHaveLength(1);
    });
})