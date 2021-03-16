import Enzyme from "enzyme";
import Adapater from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapater() });
