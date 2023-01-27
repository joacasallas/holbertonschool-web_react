import { shallow } from 'enzyme';
import Login from './Login';
import '../setupTests'

describe('testing <Login/>', ()=>{
    let wrapper = shallow(<Login />);
    beforeEach(()=>{
        wrapper = shallow(<Login />);
    });

    test('it renders without crashing', ()=>{
        expect(wrapper.exists()).toEqual(true);
     
    });
    test('it renders two input and two label tags', ()=>{
        expect(wrapper.find("input")).toHaveLength(2);
        expect(wrapper.find("label")).toHaveLength(2);
    });
})
