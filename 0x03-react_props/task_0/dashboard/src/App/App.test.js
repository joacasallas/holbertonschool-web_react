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
})