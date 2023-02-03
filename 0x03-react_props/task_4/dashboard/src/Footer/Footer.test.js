import { shallow } from 'enzyme';
import Footer from './Footer';
import '../setupTests'

describe('testing <Footer/>', ()=>{
    let wrapper = shallow(<Footer />);
    beforeEach(()=>{
        wrapper = shallow(<Footer />);
    });

    test('it renders without crashing', ()=>{
        expect(wrapper.exists()).toEqual(true);
     
    });
    test('it renders the text “Copyright”', ()=>{
        const text = "Copyright";
        expect(wrapper.find("p").text()).toContain(text);
    });
})
