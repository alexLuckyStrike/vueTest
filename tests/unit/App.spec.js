import App from "@/App.vue";
import { mount } from "@vue/test-utils";

describe("Counter", () => {
  let wrapper;

  const findButtonByTextContent = (text) =>
    wrapper.findAll("button").wrappers.find((elem) => elem.text() === text);

  const createComponent = () => {
    wrapper = mount(App);
  };

  createComponent();

  const getGroup = wrapper.findAll("button").wrappers;
  // console.log("getGroup:", getGroup);

  it("shows 0 when initialized", async () => {
    // Arrange
    createComponent();
    await findButtonByTextContent("+").trigger("click");
    // Assert

    console.log("wrapper:after +:", wrapper.html());
    // expect(wrapper.text()).toContain("1");

    await findButtonByTextContent("-").trigger("click");
    console.log("wrapper:after -:", wrapper.html());
    expect(wrapper.text()).toContain("0");
  });
});
