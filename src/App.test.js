import { shallowMount } from '@vue/test-utils';
import App from './App.vue';

it('should match snapshot', () => {
  const wrapper = shallowMount(App);
  expect(wrapper).toMatchSnapshot();
});
