
module.exports = (api, options, rootOptions) => {
    api.extendPackage({
        scripts: {
            "serve": "vue-cli-service serve",
            "build": "vue-cli-service build",
        },

        dependencies: {
            "@babel/plugin-proposal-optional-chaining": "^7.14.5",
            "@tosvue/tos-components": "git+http://terramaster:eTnv_j6EdwDNuRMdjatj@gitlab.local/TOSVue/tos-components.git",
            "axios": "^0.21.1",
            "core-js": "^3.6.5",
            "echarts": "^5.1.2",
            "element-ui": "^2.15.3",
            "vue": "^2.6.11",
            "vue-cookies": "^1.7.4",
            "vue-router": "^3.2.0",
            "vuex": "^3.4.0"
        },

        devDependencies: {
            "@vue/cli-plugin-babel": "~4.5.0",
            "@vue/cli-plugin-vuex": "~4.5.0",
            "@vue/cli-service": "~4.5.0",
            "babel-plugin-component": "^1.1.1",
            "@vue/cli-plugin-router": "~4.5.0",
            "sass": "^1.26.5",
            "sass-loader": "^8.0.2",
            "vue-template-compiler": "^2.6.11"
        }
    });
    api.onCreateComplete(() => {
       
    });
    api.render('./template');
};