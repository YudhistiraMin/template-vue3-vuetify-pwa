import { createApp } from "vue";
import { defineRule, configure, extend } from "vee-validate";
import { required, email } from '@vee-validate/rules';


defineRule('required', required);
defineRule('email', email);


configure({
  generateMessage: ({ field }) => `${field} tidak valid`,
});

const VeeValidatePlugin = {
  install(app) {
    app.config.globalProperties.$veeValidate = {
      defineRule,
      configure,
      extend,
    };
  },
};

export default VeeValidatePlugin;
