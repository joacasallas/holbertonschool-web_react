import { shallow } from 'enzyme';
import App from './App';
import '../setupTests'

describe('testing <App/>', ()=>{
    let wrapper = shallow(<App />);
    beforeEach(()=>{
        wrapper = shallow(<App />);
    });

    test('test that App renders without crashing', ()=>{
        expect(wrapper.exists()).toEqual(true);
    });

    test('it contain the Notifications component', ()=>{
        expect(wrapper.find("Notifications")).toHaveLength(1);
    });
    test('contain the Header component', ()=>{
        expect(wrapper.find("Header")).toHaveLength(1);
    });
    test('contain the Login component', ()=>{
        expect(wrapper.find("Login")).toHaveLength(1);
    });
    test('contain the Footer component', ()=>{
        expect(wrapper.find("Footer")).toHaveLength(1);
    });
})
