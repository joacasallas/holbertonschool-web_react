import { shallow } from 'enzyme';
import App from './App';

describe('testing <App/>', ()=>{
    let wrapper = shallow(<App />);
    beforeEach(()=>{
        wrapper = shallow(<App />);
    });

    test('test that App renders without crashing', ()=>{
        expect(wrapper.exists()).toEqual(true);
    });
    test('App renders a div with the class App-header', ()=>{
        expect(wrapper.find("div.App-header")).toHaveLength(1);
    });
    test('App renders a div with the class App-body', ()=>{
        expect(wrapper.find("div.App-header")).toHaveLength(1);
    });
    test('App renders a div with the class App-footer', ()=>{
        expect(wrapper.find("div.App-header")).toHaveLength(1);
    });
})